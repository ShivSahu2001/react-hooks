import React from "react"

const Count = ({text, count}) => {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

// here the React.memo is not a hook
// It will ensure that the component will rerender if their is a change in its props or state
export default React.memo(Count)
