import React, { useRef } from 'react'

import FileAcceptor from './FileAcceptor'
import ColumnMapper from './ColumnMapper'
import FilePreview from './FilePreview'

import classes from './gluestick.styles.module.css'

import backIconAsset from '../assets/arrow_back.svg'
import forwardIconAsset from '../assets/arrow_forward.svg'
import doneIconAsset from '../assets/check.svg'

// Importing images is a bit clunky with create-react-library, got my solution from here.
// https://github.com/transitive-bullshit/create-react-library/issues/220#issuecomment-771578208
const backIcon = require(`./${backIconAsset}`)
const forwardIcon = require(`./${forwardIconAsset}`)
const doneIcon = require(`./${doneIconAsset}`)

const GlueStick = ({ user, state = 'mapping', onBack, onUpload, onDone, schema}) => {
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
      component = <FileAcceptor user={user} onUpload={onUpload || onUploadDefault} />
      break
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        {component}
        <div className={classes.footer}>
          { (stage == 'mapping' || stage == 'preview') ? <a className={classes.btnBack} onClick={onBack || onBackDefault}><img src={backIcon}/>Back</a> : null }
          <div className={classes.breadcrumbs}>
            <span className={ stage == 'upload' ? classes.activeStage : classes.inactiveStage }>Upload</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'mapping' ? classes.activeStage : classes.inactiveStage }>Map Data</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'preview' ? classes.activeStage : classes.inactiveStage }>Preview</span>
          </div>
          { stage == 'mapping' && <a className={classes.btnForward} onClick={() => childRef.current.handleMapping()}>Continue<img src={forwardIcon}/></a> }
          { stage == 'preview' && <a className={classes.btnForward} href='#'>Import<img src={doneIcon}/></a> }
        </div>
      </div>
    </div>
  )
}

export default GlueStick
