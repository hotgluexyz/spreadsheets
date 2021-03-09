import React from 'react'
import Spreadsheet from "react-spreadsheet";

import classes from './preview.styles.module.css'

const FilePreview = ({data}) => {
  return (
    <div className={classes.root}>
      <h5>Preview your final data</h5>
      <Spreadsheet data={data} />
    </div>
  )
}

export default FilePreview
