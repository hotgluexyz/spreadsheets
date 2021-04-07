import React from 'react';
import classes from './loading.styles.module.css'

const Loading = ({side}) => {
    const styles = side ? {[`margin${side}`]: "1rem"} : {};
    return (
        <div className={classes["lds-ring"]} style={styles}><div></div><div></div><div></div><div></div></div>
    )
}
  
export default Loading
