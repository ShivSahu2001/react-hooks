import { useState } from "react";


const HookCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
             <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default HookCounter
