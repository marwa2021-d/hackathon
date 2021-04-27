import React, { useContext, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"

import api from '../../api/api'


import Context from "../../AppContext"
import Table from "./Table"



const Page1 =()=>{
    const [data,setData] = useState({})
    const context = useContext(Context)
    
    //*********************************** */
    const [value, setValue] = useState('')
    //*********************************** */

    const handleClick = async(inputRef,searchParamRef)=>{

        const newdata = {
            inputRef, searchParamRef
        }
    }
        // console.log(context.querries)
        // setData(newdata)
        // const key = localStorage.length
        // const x = context.querries
        // x.push("hello")
        // await context.setQuerries(x)
        // console.log(context.querries)
    
    useEffect(()=>{
        console.log(data)
    },[data])


    //*********************************** */
    const fetchFunc = async () => {
        const fetch = await api.get('/')
        console.log(fetch.data)
    }
    const postFunc = async () => {
        const fetch = await api.post('/', { name: value })
        console.log(fetch.config.data)
    }
    //*********************************** */


    return (
    <div className="page1">

        <div className="content-wrapper">

            <div className="heading-wrapper">

                <h1>&ensp;MDN Translator&ensp;</h1>
                <SearchBar handleClick={handleClick}/>

            </div>

            <div className="table-wrapper">
                <Table givenData={data}/>  
            </div> 

        </div>

    </div>
    );
}

export default Page1