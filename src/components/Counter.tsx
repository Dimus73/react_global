import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count=>count+1);
    }

    return (
        <div className={classes.btn}>
            <div style={{fontFamily:"Consolas"}}>Test line</div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
