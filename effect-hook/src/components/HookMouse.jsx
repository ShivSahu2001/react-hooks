import { useEffect, useState } from "react";


const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    // if array dependency is empty it means that effect will run only once
    useEffect(()=> {
        console.log("useEffect Called");
        window.addEventListener("mousemove", logMousePosition)

        // cleanup method same as componentWillUnmount in class component
        // removing timers, removing event listeners,etc
        return () => {
            console.log("Component Unmounting Code")
            window.removeEventListener("mousemove", logMousePosition)
        }

    },[])

    return (
        <div>
            Hook X- {x}  Y- {y} 
        </div>
    )
}

export default HookMouse
