import React, { useRef } from 'react'

import FileAcceptor from './FileAcceptor'
import ColumnMapper from './ColumnMapper'
import FilePreview from './FilePreview'
import Loading from './Loading'

import classes from './gluestick.styles.module.css'

import ArrowBackIcon from './icons/ArrowBackIcon';
import ArrowForwardIcon from './icons/ArrowForwardIcon';
import CheckIcon from './icons/CheckIcon';

import { doImport } from '../api/client'

const GlueStick = ({ user, endpoint, state = 'upload', schema, onImport}) => {
  const childRef = useRef();

  const [stage, setStage] = React.useState(state);
  const [loading, setLoading] = React.useState(false);
  const [mappingData, setMappingData] = React.useState({});
  const [finalData, setFinalData] = React.useState();
  const [filename, setFileName] = React.useState();

  const onUpload = (data, filename) => {
    // Start mapping
    setMappingData(data);
    setFileName(filename);
    setStage('mapping');
  };

  const postMapping = (data) => {
    // Show preview of final data
    setFinalData(data);
    setStage('preview');
  };

  const onMap = async () => {
    setLoading(true);
    await childRef.current.handleMapping();
    setLoading(false);
  }

  const onBack = () => {
    if (stage === 'preview') {
      setStage('mapping');
    } else if (stage === 'mapping') {
      setStage("upload");
    }
  };

  const onImportInternal = async () => {
    setLoading(true);
    await doImport(endpoint, user, filename);
    setLoading(false);
    onImport ? onImport(user, filename) : alert(`${filename} has been imported successfully!`)
  };

  let component
  switch (stage) {
    case 'mapping':
      component = <ColumnMapper
                          user={user}
                          endpoint={endpoint}
                          ref={childRef}
                          data={mappingData}
                          filename={filename}
                          onDone={postMapping}
                          schema={schema} />
      break
    case 'preview':
      component = <FilePreview data={finalData} />
      break
    default:
      component = <FileAcceptor user={user} endpoint={endpoint} onUpload={onUpload} />
      break
  }

  // Used to get higher specificity over global css.
  const buttonStyle = { color: '#ffffff' }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        {component}
        <div className={classes.footer}>
          { (stage == 'mapping' || stage == 'preview') ? <a style={buttonStyle} className={classes.btnBack} onClick={onBack}><ArrowBackIcon/>Back</a> : null }
          <div className={classes.breadcrumbs}>
            <span className={ stage == 'upload' ? classes.activeStage : classes.inactiveStage }>Upload</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'mapping' ? classes.activeStage : classes.inactiveStage }>Map Data</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'preview' ? classes.activeStage : classes.inactiveStage }>Preview</span>
          </div>
          { stage == 'mapping' && <a style={buttonStyle} className={classes.btnForward} onClick={onMap}>
            Continue{loading ? <Loading side={"Left"}/> : <ArrowForwardIcon/>}
          </a> }
          { stage == 'preview' && <a style={buttonStyle} className={classes.btnForward} onClick={onImportInternal}>
            Import{loading ? <Loading side={"Left"}/> : <CheckIcon/>}
          </a> }
        </div>
      </div>
    </div>
  )
}

export default GlueStick
