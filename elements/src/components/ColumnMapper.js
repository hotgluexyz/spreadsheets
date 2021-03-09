import React from 'react'
import { doMapping } from '../api/client'
import classes from './mapper.styles.module.css'

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
                            <td align="right">Your Column</td>
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
                        onClick={handleSaveMapping}>
                    Confirm mapping
                </button>
            </div>
       </div>
    );
}

export default ColumnMapper;
