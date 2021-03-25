import React from 'react'
import Spreadsheet from "react-spreadsheet";
import { doMapping, validateMapping } from '../api/client'
import classes from './mapper.styles.module.css'

const ColumnSelector = ({invalid, requiredCol, availableCols, onSelect, defaultValue}) => {
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
            {invalid && <td>
                {invalid.percent} rows have a valid value
                {invalid && <Spreadsheet data={invalid.rows} />}
            </td>}
        </tr>
    );
}

const invert = (obj) => {
    let result = {}
    Object.keys(obj).forEach(k => {
        result[obj[k]] = k
    });
    return result;
}

const ColumnMapper = ({schema, data, filename, onDone}) => {
    const [loading, setLoading] = React.useState(false);
    const [mapping, setMapping] = React.useState({});
    const [invalid, setInvalid] = React.useState({});

    const requiredCols = schema && schema.fields && schema.fields.map(f => f.col);
    const availableCols = data && Object.keys(data);

    const updateMapping = (requiredCol, selectedCol) => {
        mapping[requiredCol] = selectedCol;
        setMapping(mapping);
        handleValidate();
    }

    const handleMapping = async () => {
        if (Object.keys(mapping).length < requiredCols.length) {
            alert("Oops! You didn't select a matching column for all the required columns.")
            return;
        }

        setLoading(true);

        try {
            const {data} = await doMapping(filename, invert(mapping), schema);
            onDone && onDone(data);
        } catch (err) {
            console.error(err);
            alert(`Something went wrong: ${err}: ${err.stack}`);
        } finally {
            setLoading(false);
        }
    }

    const handleValidate = async () => {
        if (Object.keys(mapping).length < requiredCols.length) {
            return;
        }
        setLoading(true);

        try {
            const {data} = await validateMapping(filename, invert(mapping), schema);
            setInvalid(data);
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
            selectors.push(<ColumnSelector key={col} invalid={invalid[col]} requiredCol={col} defaultValue={mapping[col]} availableCols={availableCols} onSelect={updateMapping}/>)
        });
    }

    return (
       <div className={classes.container}>
            {loading && <h6>Loading...</h6>}
            <div className={classes.headerContainer}>
                <div className={classes.textContainer}>
                    <h6>
                        Select the matching column names from your input file
                    </h6>
                </div>
            </div>

            <div className={classes.scrollGrid}>
                <table className={classes.table} aria-label="simple table">
                    <thead>
                        <tr>
                            <td style={{padding: 10}} >Required Column</td>
                            <td>Your Column</td>
                            <td align="right">Validate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectors}
                    </tbody>
                </table>
            </div>

            <div>
                <button variant="outlined" color="primary" component="span"
                        disabled={loading}
                        onClick={handleMapping}>
                    Confirm mapping
                </button>
            </div>
       </div>
    );
}

export default ColumnMapper;
