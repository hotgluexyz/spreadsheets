import React from 'react'
import { uploadFiles } from '../api/client'
import classes from './acceptor.styles.module.css'

const FileAcceptor = (props) => {
  const onUpload = (e) => {
    const files = e.target.files

    if (files && files.length > 0) {
      uploadFiles(files[0]);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper} style={{ width: 400, height: 300 }}>
        <div style={{ display: 'inline-grid' }}>
          <h3 className={classes.text}>Drag a File</h3>
          <h6 className={classes.subtext}>or</h6>
          <h3 className={classes.text}>Click to Upload</h3>
        </div>
      </div>
      <input
        id='data-file'
        accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
        type='file'
        className={classes.fileInput}
        onChange={onUpload}
      />
    </div>
  )
}

export default FileAcceptor
