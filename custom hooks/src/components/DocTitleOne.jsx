
import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Whenever we have to write same logic into different components we should not duplicate the code mutliple times instead we should create a Custom hook
const DocTitleOne = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count - ${count}`
    // }, [count])

    useDocumentTitle(count)

    return (

        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleOne
