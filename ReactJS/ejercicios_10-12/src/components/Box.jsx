import React, { useState } from 'react'

const Box = () => {
    const [color, setColor] = useState('black');
    const [intervalId, setIntervalId] = useState(0);

    const boxStyle = {
        width: '255px',
        height: '255px',
        backgroundColor: color
    }

    const changeColor = () => {
        let r = Math.floor(Math.random() * (255 + 1)),
            g = Math.floor(Math.random() * (255 + 1)),
            b = 255;
        setColor(`rgb(${r},${g},${b})`);
    }

    const onEnter = () =>{
        setIntervalId(setInterval(changeColor,500))
    }

    const onExit = () =>{
        clearInterval(intervalId);
        setIntervalId(0);
    }

    return (
        <div
            onMouseEnter={onEnter}
            onMouseOut={onExit}
            onDoubleClick={onExit}
            style={boxStyle}>
        </div>
    )
}

export default Box