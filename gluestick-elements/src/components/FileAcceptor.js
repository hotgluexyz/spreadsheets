import React from 'react'
import { uploadFiles } from '../api/client'
import classes from './acceptor.styles.module.css'

import UploadFileIcon from './icons/UploadFileIcon';

const FileAcceptor = ({user, endpoint, onUpload}) => {
  const [loading, setLoading] = React.useState(false);

  const onUploadInternal = async (e) => {
    setLoading(true);
    const files = e.target.files;

    if (files && files.length > 0) {
      uploadFiles(endpoint, user, files[0]).then(res => {
        const {data, filename} = res;
        // Send the parsed columns to the listener
        onUpload && onUpload(data, filename);
        setLoading(false);
      });
    }
  }

  return (
    <React.Fragment>
      <h3 className={classes.h3}>Upload your data</h3>
      <p className={classes.p}>To begin the data import, please upload a CSV file.</p>
      {loading 
      ? <div className={classes.loadingArea}>
        <div className={classes["lds-ring"]}><div></div><div></div><div></div><div></div></div>
      </div>
      : <div className={classes.uploadArea}>
        <UploadFileIcon className={classes.icon} />
        <h3 className={classes.text}>Drag & Drop a File</h3>
        <span className={classes.subtext}>OR SELECT A FILE</span>
        <input
          id='data-file'
          accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          type='file'
          className={classes.fileInput}
          onChange={onUploadInternal}
        />
      </div>}
    </React.Fragment>
  )
}

export default FileAcceptor
