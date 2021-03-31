import React from 'react'

import classes from './preview.styles.module.css'

// Format:
// {
//    [header row]
//    [row]
//    [row]
//    ...
// }
const PreviewTable = ({data}) => {
  const rows = data.map((row, index) => {
    const headerClassName = `${index == 0 ? `${classes.row} ${classes.header}` : ''}`
    const rowClassName = `${classes.row} ${index % 2 == 0 ? classes.evenRow : classes.oddRow}` 
    const generateCellClassName = cellIndex => `${(cellIndex == 0) ? classes.firstCell : ''} ${(cellIndex == row.length-1) ? classes.lastCell : ''}`

    // I've added this here temporarily for the example, but you'd need to implement your own logic for what needs to be right aligned.
    const generateAlignmentClassName = cellIndex => `${cellIndex >= 4 ? classes.rightAligned : ''}`

    const elements = row.map((content, _index) => {
      const cellClassName = generateCellClassName(_index)
      const alignmentClassName = generateAlignmentClassName(_index)

      const rowClasses = `${headerClassName} ${rowClassName} ${cellClassName} ${alignmentClassName}`
      const headerClasses = `${headerClassName} ${alignmentClassName} ${cellClassName}`
      const classes = index == 0 ? headerClasses : rowClasses

      return (<div style={{ gridColumn: _index+1 }} className={classes} key={_index}>{content}</div>)
    })

    return elements
  })

  return (
    <div className={classes.grid}>
      {rows}
    </div>
  )
}

const FilePreview = ({data}) => {
  return (
    <React.Fragment>
      <h3 className={classes.h3}>Preview your final data</h3>
      <p className={classes.p}>Make sure that the example data shown below matches your expectations and then confirm the data import.</p>
      <PreviewTable data={data} />
    </React.Fragment>
  )
}

export default FilePreview
