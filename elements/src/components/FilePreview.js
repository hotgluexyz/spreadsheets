import React from 'react'
import Spreadsheet from "react-spreadsheet";

// import classes from './preview.styles.module.css'

const FilePreview = ({data}) => {
  return (
    <React.Fragment>
      <h5>Preview your final data</h5>
      <Spreadsheet data={data} />
    </React.Fragment>
  )
}

export default FilePreview
