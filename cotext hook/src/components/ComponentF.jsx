
import { useContext } from "react";
import { UserContext,CourseContext } from "../App"
const ComponentF = () => {
    const user = useContext(UserContext);
    const course = useContext(CourseContext);
    return (
        <div>
            {/* <UserContext.Consumer>
                {
                    user => {
                        return <CourseContext.Consumer>
                            {
                                course => {
                                    return (
                                        <div>
                                            User Context Value {user}, course Context value {course}
                                        </div>
                                    
                                    )
                            }}
                        </CourseContext.Consumer>
                    }
                }
            </UserContext.Consumer> */}
            {user} is enrolled in course called - {course}
        </div>
    )
}

export default ComponentF
