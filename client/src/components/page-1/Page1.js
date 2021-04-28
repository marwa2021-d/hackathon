import React, { useContext, useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"

import api from '../../api/api'


import Context from "../../AppContext"

import Table from "../utils/Table"




const Page1 =()=>{


    const [data,setData] = useState([])
    const context = useContext(Context)
    


    const handleClick = (inputRef)=>{
        const newdata = [...data]
        newdata.push(inputRef)
        setData(newdata)
    }

    const tableClick =(e)=>{
        // const querryParam = e.target.parentElement.children[1].innerText;
        console.log(`querryParam`)
    }
    



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


    return <div className="page1">

           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
        <h1>Hackton App ,translate MDN</h1>

        <SearchBar handleClick={handleClick}/>
        <Table givenData={data} tableClick ={tableClick}/>

    </div>
}

export default Page1