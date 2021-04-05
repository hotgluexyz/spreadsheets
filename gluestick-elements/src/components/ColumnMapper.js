import React, { forwardRef, useImperativeHandle } from 'react'
import { doMapping, validateMapping } from '../api/client'
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

const invert = (obj) => {
    let result = {}
    Object.keys(obj).forEach(k => {
        result[obj[k]] = k
    });
    return result;
}

const ColumnMapper = forwardRef(({user, endpoint, schema, data, filename, onDone}, ref) => {
    const [loading, setLoading] = React.useState(false);
    const [mapping, setMapping] = React.useState({});
    const [invalid, setInvalid] = React.useState({});

    useImperativeHandle(ref, () => ({
      async handleMapping() {
        if (Object.keys(mapping).length < requiredCols.length) {
            alert("Oops! You didn't select a matching column for all the required columns.")
            return;
        }

        setLoading(true);

        try {
            const {data} = await doMapping(endpoint, user, filename, invert(mapping), schema);
            onDone && onDone(data);
        } catch (err) {
            console.error(err);
            alert(`Something went wrong: ${err}: ${err.stack}`);
        } finally {
            setLoading(false);
        }
      }
    }));

    const requiredCols = schema && schema.fields && schema.fields.map(f => f.col);
    const availableCols = data && Object.keys(data);

    const updateMapping = (requiredCol, selectedCol) => {
        mapping[requiredCol] = selectedCol;
        setMapping(mapping);
        handleValidate();
    }

    const handleValidate = async () => {
        if (Object.keys(mapping).length < requiredCols.length) {
            return;
        }
        setLoading(true);

        try {
            const {data} = await validateMapping(endpoint, user, filename, invert(mapping), schema);
            setInvalid(data);
        } catch (err) {
            console.error(err);
            alert(`Something went wrong: ${err}: ${err.stack}`);
        } finally {
            setLoading(false);
        }
    }

    const HeaderRow = ({importHeader, value}) => {
      const [col, selectCol] = React.useState(value || '');
      let options = []

      if (availableCols) {
        availableCols.forEach(c => {
              options.push(
                  <option key={`${importHeader}-option-${c}`} value={c}>{c}</option>
              );
          });
      }

      const onChange = (e) => {
        selectCol(e.target.value);
        updateMapping(importHeader, e.target.value);
      };

      return (<React.Fragment>
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
            <select id={`${importHeader}-select`}
                    value={col}
                    onChange={onChange}>
                {options}
            </select>
            <img src={clearIcon} />
          </div>
        </div>
      </React.Fragment>)
    }

    const ColumnMapper = ({importHeader, invalidData}) => {
      return (
        <div className={classes.columnMapRow}>
          <HeaderRow importHeader={importHeader} value={mapping[importHeader]}/>
          {invalidData && Object.values(invalidData.rows).map((data, index) => {
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

    const AsideInformation = ({validation}) => {
      return (
        <aside className={classes.aside}>
          {!validation && Object.keys(invalid).length > 0 && <div><img src={checkIcon}/><p>All rows have a valid value for this column.</p></div>}
          {validation && <div><img src={infoIcon}/><p><span>{validation.percent}</span> rows have a valid value for this column.</p></div>}
        </aside>
      )
    }

    const columnMapRows = requiredCols.map((importHeader, index) => {
      return (
        <React.Fragment>
          {index>0 && <div className={classes.spacer}></div> }
          <div style={{ display: 'flex', marginBottom: `${index+1==data.length ? 'inherit' : '2rem' }`}}>
            <ColumnMapper importHeader={importHeader} invalidData={invalid[importHeader]}/>
            <AsideInformation validation={invalid[importHeader]} />
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
    );
});

export default ColumnMapper;
