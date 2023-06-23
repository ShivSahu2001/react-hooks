
import React, { useMemo } from 'react'
import { useState } from 'react';

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

   

    const isEven =  useMemo(() => {
        let i=0
        while(i < 2000000000) i++;
        return counterOne%2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </div>
    )
}
// Why it is displaying slow and UI interaction is also very slow?
// Because   every time the state updates the component rerenders and as it rerenders everytime it will call isEven() everyTime 

// If you want to cache a function then use useCallback hook
// when you want to cache the result of invoked function then use useMemo hook

export default Counter
