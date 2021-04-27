import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar"

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


    return <>
        <h1>first page</h1>
        <SearchBar handleClick={handleClick}/>
    </>
}

export default Page1