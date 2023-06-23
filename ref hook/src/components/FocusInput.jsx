
import React, { useEffect, useRef } from 'react'

// You can use the ref hook to imperatively access the DOM nodes in react functional component
const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    }, [])

    return (
        <div>
           <input ref={inputRef} type="text" /> 
        </div>
    )
}

export default FocusInput
