import { useContext } from "react";
import ComponentF from "./ComponentF"
import { CourseContext, UserContext } from "../App";

const ComponentE = () => {
    const user = useContext(UserContext);
    const course = useContext(CourseContext);
    return (
        <div>
            {/* {user} - {course} */}
            <ComponentF />
        </div>
    )
}

export default ComponentE
