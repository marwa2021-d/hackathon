import React, { useState } from "react"
import api from '../../api/api'
import Carrousel from "../page-1/Carrousel"


const SpecificData = ()=>{

        //*********************************** */
        const [value, setValue] = useState("")
        //*********************************** */
        //*********************************** */
    const fetchFunc = async () => {
            const fetch = await api.get('/')
            setValue(fetch.data)
            console.log(fetch.data)
        }
    const postFunc = async () => {
            const fetch = await api.post('/', { name: value })
            console.log(fetch.config.data)
        }
        //*********************************** */

    return<>

    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>
    <h2>SpecificData</h2>

        {/*  */}
        <button onClick={fetchFunc}>fetch</button>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={postFunc}>post</button>
        {/*  */}

        <Carrousel givenData={value}/>
    </>
}

export default SpecificData