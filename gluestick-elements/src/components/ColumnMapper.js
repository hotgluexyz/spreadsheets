import React, { forwardRef, useImperativeHandle } from 'react'
import stringSimilarity from 'string-similarity'

import { doMapping, validateMapping } from '../api/client'
import classes from './mapper.styles.module.css'

import ArrowIcon from './icons/ArrowForwardIcon';
import CheckIcon from './icons/CheckIcon';
import InfoIcon from './icons/InfoIcon';

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

    const requiredCols = schema && schema.fields && schema.fields.map(f => f.col);
    const availableCols = data && Object.keys(data);

    React.useEffect(() => {
      if (!requiredCols || !availableCols || Object.keys(mapping).length !== 0) return;

      // Set default values for mapping
      for (const requiredCol of requiredCols) {
        const {bestMatch} = stringSimilarity.findBestMatch(requiredCol, availableCols);
        const selectedCol = bestMatch && bestMatch.target;
        if (selectedCol)
          updateMapping(requiredCol, selectedCol);
      }
    }, [requiredCols, availableCols]);

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
          <span><ArrowIcon fillColor={"rgb(85,90,100)"}/></span>
        </div>
        <div className={`${classes.row} ${classes.last}`} style={{ gridColumn: 4}}>
          <div className={classes.inputContainer}>
            <select id={`${importHeader}-select`}
                    value={col}
                    onChange={onChange}>
                {options}
            </select>
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
          {!validation && Object.keys(invalid).length > 0 && <div><CheckIcon fillColor={"rgb(40,237,143)"}/><p>All rows have a valid value for this column.</p></div>}
          {validation && <div><InfoIcon/><p><span>{validation.percent}</span> rows have a valid value for this column.</p></div>}
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
