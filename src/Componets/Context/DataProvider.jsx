import React, { createContext } from 'react'
export const myContext=createContext()

const DataProvider = ({child}) => {
  return (
    <>
    <myContext.Provider>
        {child}
    </myContext.Provider>
    </>
  )
}

export default DataProvider