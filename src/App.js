import React, { useState } from 'react'

const Temperature = () => {
    const [count, setCount] = useState(10);
    const [color, setColor] = useState("cold")


    const increase = () => {
        if (count === 30) return;
        const temp = count + 1

        if (temp >= 15) {
            setColor('hot')
        }
        setCount(temp)
    }
    const decrease = () => {
        if (count === 0) return;
        const temp = count - 1

        if (temp < 15) {
            setColor('cold')
        }

        setCount(temp)
    }

    return (
        <div className='app-container'>
            <div className='temperature-display-container'>
                <div className={`temperature-display ${color}`}>
                    {count} C
                </div>
            </div>
            <div className='button-container'>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default Temperature