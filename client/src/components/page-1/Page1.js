import React, { useContext, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"
import Context from "../../AppContext"

// use context.

const Page1 =()=>{
    const [data,setData] = useState({})
    const context = useContext(Context)

    

    const handleClick = async(inputRef,searchParamRef)=>{
        const newdata = {
            inputRef,searchParamRef
        }
        console.log(context.querries)
        setData(newdata)
        const key = localStorage.length
        // item been striglified has to be converted back when acquired back
        localStorage.setItem(key,JSON.stringify(newdata))
    }
    
    useEffect(()=>{
        console.log(data)
    },[data])


    return <div className="page1">
        {async()=>await context.setQuerries("hello")}
        <h1>Hackton App ,translate MDN</h1>
        <SearchBar handleClick={handleClick}/>
        <DisplayFeature/>
    </div>
}

export default Page1