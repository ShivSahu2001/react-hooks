

import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const CourseContext = React.createContext()
function App() {


  return (
    <>
    <UserContext.Provider value={'Shiv'}>
    <CourseContext.Provider value={"Learning React Hooks"}>

      <ComponentC />
    </CourseContext.Provider>

    </UserContext.Provider>
    </>
  )
}

export default App
