import React from 'react'

import FileAcceptor from './FileAcceptor'
import ColumnMapper from './ColumnMapper'
import FilePreview from './FilePreview'

import classes from './gluestick.styles.module.css'

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
        <div>
          { (stage == 'mapping' || stage == 'preview') ? <a href='#'>Back</a> : null }
          <div className={classes.breadcrumbs}>
            <span className={ stage == 'upload' ? classes.activeStage : classes.inactiveStage }>Upload</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'mapping' ? classes.activeStage : classes.inactiveStage }>Map Data</span>
            <span className={classes.breadcrumbSpacer}></span>
            <span className={ stage == 'preview' ? classes.activeStage : classes.inactiveStage }>Preview</span>
          </div>
          { stage == 'mapping' ? <a href='#'>Continue</a> : null }
          { stage == 'preview' ? <a href='#'>Import</a> : null }
        </div>
      </div>
    </div>
  )
}

export default GlueStick
