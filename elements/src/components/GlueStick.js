import React from 'react'

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

const GlueStick = ({ stage, data, filename, onUpload, onDone, schema}) => {

  let component
  switch (stage) {
    case 'mapping':
      component = <ColumnMapper
                          data={data}
                          filename={filename}
                          onDone={onDone}
                          schema={schema} />
      break
    case 'preview':
      component = <FilePreview data={data} />
      break
    default:
      component = <FileAcceptor onUpload={onUpload} />
      break
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        {component}
        <div className={classes.footer}>
          { (stage == 'mapping' || stage == 'preview') ? <a className={classes.btnBack} href='#'><img src={backIcon}/>Back</a> : null }
          <div className={classes.breadcrumbs}>
            <span className={ stage == 'upload' ? classes.activeStage : classes.inactiveStage }>Upload</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'mapping' ? classes.activeStage : classes.inactiveStage }>Map Data</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'preview' ? classes.activeStage : classes.inactiveStage }>Preview</span>
          </div>
          { stage == 'mapping' ? <a className={classes.btnForward} href='#'>Continue<img src={forwardIcon}/></a> : null }
          { stage == 'preview' ? <a className={classes.btnForward} href='#'>Import<img src={doneIcon}/></a> : null }
        </div>
      </div>
    </div>
  )
}

export default GlueStick
