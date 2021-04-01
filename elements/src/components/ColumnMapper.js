import React from 'react'
import { doMapping } from '../api/client'
import classes from './mapper.styles.module.css'

import arrowAsset from '../assets/arrow_forward_dark.svg'
import clearAsset from '../assets/clear.svg'
import checkAsset from '../assets/check_green.svg'
import infoAsset from '../assets/info.svg'

// Importing images is a bit clunky with create-react-library, got my solution from here.
// https://github.com/transitive-bullshit/create-react-library/issues/220#issuecomment-771578208
const arrowIcon = require(`./${arrowAsset}`)
const clearIcon = require(`./${clearAsset}`)
const checkIcon = require(`./${checkAsset}`)
const infoIcon = require(`./${infoAsset}`)


const ColumnSelector = (props) => {
    const {requiredCol, availableCols, onSelect, defaultValue} = props;
    const [col, selectCol] = React.useState(defaultValue ? defaultValue : '');
    let options = []

    if (availableCols) {
        availableCols.forEach(c => {
            options.push(
                <option key={`${requiredCol}-option-${c}`} value={c}>{c}</option>
            );
        });
    }

    const onChange = (e) => {
        selectCol(e.target.value);
        onSelect(requiredCol, e.target.value);
    };

    return (
        <tr key={`${requiredCol}-tr`}>
            <td>
                {requiredCol}
            </td>
            <td>
                <div className={classes.formControl}>
                    <label htmlFor={`${requiredCol}-select`}>{requiredCol}</label>
                    <select id={`${requiredCol}-select`}
                            value={col}
                            onChange={onChange}>
                        {options}
                    </select>
                </div>
            </td>
        </tr>
    );
}

const ColumnMapper = ({schema, data, filename, onDone}) => {
    const [loading, setLoading] = React.useState(false);
    const [mapping, setMapping] = React.useState({});

    const requiredCols = schema && Object.keys(schema);
    const availableCols = data && Object.keys(data);

    const updateMapping = (requiredCol, selectedCol) => {
        mapping[selectedCol] = requiredCol;
        setMapping(mapping);
    }

    const handleSaveMapping = async () => {
        if (Object.keys(mapping).length < requiredCols.length) {
            alert("Oops! You didn't select a matching column for all the required columns.")
            return;
        }

        setLoading(true);

        try {
            const {data} = await doMapping(filename, mapping);
            onDone && onDone(data);
        } catch (err) {
            console.error(err);
            alert(`Something went wrong: ${err}: ${err.stack}`);
        } finally {
            setLoading(false);
        }
    }

    // Create list of selectors for each requiredCol
    let selectors = [];

    if (requiredCols && availableCols && mapping) {
        requiredCols.forEach(col => {
            selectors.push(<ColumnSelector key={col} requiredCol={col} defaultValue={mapping[col]} availableCols={availableCols} onSelect={updateMapping}/>)
        });
    }

    const HeaderRow = ({importHeader}) => (
      <React.Fragment>
        <div className={`${classes.first} ${classes.row}`} style={{ gridColumn: 1}}>
          <span>#</span>
        </div>
        <div className={classes.row} style={{ gridColumn: 2}}>
          <span style={{ fontWeight: 'bold' }}>{importHeader}</span>
        </div>
        <div className={classes.row} style={{ gridColumn: 3}}>
          <span><img src={arrowIcon}/></span>
        </div>
        <div className={`${classes.row} ${classes.last}`} style={{ gridColumn: 4}}>
          <div className={classes.inputContainer}>
            <input type='text' placeholder='COLUMN NAME'></input>
            <img src={clearIcon} />
          </div>
        </div>
      </React.Fragment>
    )

    const ColumnMapper = ({importHeader, previewData}) => {
      return (
        <div className={classes.columnMapRow}>
          <HeaderRow importHeader={importHeader}/>
          {previewData.map((data, index) => {
            const evenOddClassName = index % 2 ? classes.evenRow : classes.oddRow

            const classNames = `${classes.row} ${evenOddClassName}`

            return (
              <React.Fragment>
                <div className={`${classNames} ${classes.first}`} style={{ gridColumn: 1}}>{index+1}</div>
                <div className={`${classNames} ${classes.last}`} style={{ gridColumnStart: 2, gridColumnEnd: 5}}>{data}</div>
              </React.Fragment>
            )
          })}
        </div>
      )
    }

    const AsideInformation = _ => {
      return (
        <aside className={classes.aside}>
          <div><img src={checkIcon}/><p>Column is mapped to <span>FIRST NAME</span></p></div>
          <div><img src={infoIcon}/><p><span>15 rows</span> are missing values for this column.</p></div>
          <div><img src={infoIcon}/><p><span>FIRST NAME</span> matches an already existing field.</p></div>
        </aside>
      )
    }

    const columnMapRows = data.slice(0).map((row, index) => {
      return (
        <React.Fragment>
          {index>0 && <div className={classes.spacer}></div> }
          <div style={{ display: 'flex', marginBottom: `${index+1==data.length ? 'inherit' : '2rem' }`}}>
            <ColumnMapper importHeader='First Name' previewData={['Anna-Liisa', 'Piibe', 'Teet']}/>
            <AsideInformation />
          </div>
        </React.Fragment>
      )
    })

    return (
      <React.Fragment>
        <h3 className={classes.h3}>Map Data Columns</h3>
        <p className={classes.p}>To ensure that data is imported correctly, please map the columns below.</p>
        <div>
          {columnMapRows}
        </div>
      </React.Fragment>
       // <div className={classes.container}>
       //      {loading && <h6>Loading...</h6>}
       //      <div className={classes.headerContainer}>
       //          <div className={classes.textContainer}>
       //              <h6>
       //                  Select the matching column names from your input file
       //              </h6>
       //          </div>
       //      </div>

       //      <div className={classes.scrollGrid}>
       //          <table className={classes.table} aria-label="simple table">
       //              <thead>
       //                  <tr>
       //                      <td style={{padding: 10}} >Required Column</td>
       //                      <td align="right">Your Column</td>
       //                  </tr>
       //              </thead>
       //              <tbody>
       //                  {selectors}
       //              </tbody>
       //          </table>
       //      </div>

       //      <div>
       //          <button variant="outlined" color="primary" component="span"
       //                  disabled={loading}
       //                  onClick={handleSaveMapping}>
       //              Confirm mapping
       //          </button>
       //      </div>
       // </div>
    );
}

export default ColumnMapper;
