import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"

const Page1 =()=>{
    const [data,setData] = useState({})

    const handleClick = (inputRef,searchParamRef)=>{
        const newdata = {
            inputRef,searchParamRef
        }
        setData(newdata)
    }

    useEffect(()=>{
        console.log(data)

    },[data])


    return <div className="page1">
        <h1>Hackton App ,translate MDN</h1>
        <SearchBar handleClick={handleClick}/>
        <DisplayFeature/>
    </div>
}

export default Page1