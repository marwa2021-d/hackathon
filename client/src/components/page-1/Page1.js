import React, { useContext, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"
import Context from "../../AppContext"
import Table from "./Table"

// use context.

const Page1 =()=>{
    const [data,setData] = useState({})
    const context = useContext(Context)


    const handleClick = async(inputRef,searchParamRef)=>{
        const newdata = {
            inputRef,searchParamRef
        }
        // console.log(context.querries)
        // setData(newdata)
        // const key = localStorage.length
        // const x = context.querries
        // x.push("hello")
        // await context.setQuerries(x)
        // console.log(context.querries)

    }
    
    useEffect(()=>{
        console.log(data)
    },[data])


    return <div className="page1">
        <h1>Hackton App ,translate MDN</h1>
        <SearchBar handleClick={handleClick}/>
        <Table givenData={data}/>        
    </div>
}

export default Page1