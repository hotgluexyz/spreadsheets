import React from 'react'
import { uploadFiles } from '../api/client'
import classes from './acceptor.styles.module.css'

import iconAsset from '../assets/upload_file.svg'

// Importing images is a bit clunky with create-react-library, got my solution from here.
// https://github.com/transitive-bullshit/create-react-library/issues/220#issuecomment-771578208
const icon = require(`./${iconAsset}`)

const FileAcceptor = ({user, onUpload}) => {
  const onUploadInternal = (e) => {
    const files = e.target.files

    if (files && files.length > 0) {
      uploadFiles(user, files[0]).then(res => {
        const {data, filename} = res;
        // Send the parsed columns to the listener
        onUpload && onUpload(data, filename);
      });
    }
  }

  return (
    <React.Fragment>
      <h3 className={classes.h3}>Upload your data</h3>
      <p className={classes.p}>To begin the data import, please upload a CSV or XML file.</p>
      <div className={classes.uploadArea}>
        <img className={classes.icon} src={icon} />
        <h3 className={classes.text}>Drag & Drop a File</h3>
        <span className={classes.subtext}>OR SELECT A FILE</span>
        <input
          id='data-file'
          accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          type='file'
          className={classes.fileInput}
          onChange={onUploadInternal}
        />
      </div>
    </React.Fragment>
  )
}

export default FileAcceptor
