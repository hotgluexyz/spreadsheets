import React, { useRef } from 'react'

import FileAcceptor from './FileAcceptor'
import ColumnMapper from './ColumnMapper'
import FilePreview from './FilePreview'

import classes from './gluestick.styles.module.css'

import ArrowBackIcon from './icons/ArrowBackIcon';
import ArrowForwardIcon from './icons/ArrowForwardIcon';
import CheckIcon from './icons/CheckIcon';

const GlueStick = ({ user, endpoint, state = 'upload', onBack, onUpload, onDone, schema}) => {
  const childRef = useRef();

  const [stage, setStage] = React.useState(state);
  const [mappingData, setMappingData] = React.useState({});
  const [finalData, setFinalData] = React.useState();
  const [filename, setFileName] = React.useState();

  const onUploadDefault = (data, filename) => {
    // Start mapping
    setMappingData(data);
    setFileName(filename);
    setStage('mapping');
  };

  const onDoneDefault = (data) => {
    // Show preview of final data
    setFinalData(data);
    setStage('preview');
  };

  const onBackDefault = () => {
    if (stage === 'preview') {
      setStage('mapping');
    } else if (stage === 'mapping') {
      setStage("upload");
    }
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
                          onDone={onDone || onDoneDefault}
                          schema={schema} />
      break
    case 'preview':
      component = <FilePreview data={finalData} />
      break
    default:
      component = <FileAcceptor user={user} endpoint={endpoint} onUpload={onUpload || onUploadDefault} />
      break
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        {component}
        <div className={classes.footer}>
          { (stage == 'mapping' || stage == 'preview') ? <a className={classes.btnBack} onClick={onBack || onBackDefault}><ArrowBackIcon/>Back</a> : null }
          <div className={classes.breadcrumbs}>
            <span className={ stage == 'upload' ? classes.activeStage : classes.inactiveStage }>Upload</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'mapping' ? classes.activeStage : classes.inactiveStage }>Map Data</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'preview' ? classes.activeStage : classes.inactiveStage }>Preview</span>
          </div>
          { stage == 'mapping' && <a className={classes.btnForward} onClick={() => childRef.current.handleMapping()}>Continue<ArrowForwardIcon/></a> }
          { stage == 'preview' && <a className={classes.btnForward} href='#'>Import<CheckIcon/></a> }
        </div>
      </div>
    </div>
  )
}

export default GlueStick
