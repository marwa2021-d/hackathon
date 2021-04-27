import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import DisplayFeature from "./Displayfeature"
import api from '../../api/api'


const Page1 = () => {
    const [data, setData] = useState({})

    //*********************************** */
    const [value, setValue] = useState('')
    //*********************************** */

    const handleClick = (inputRef, searchParamRef) => {
        const newdata = {
            inputRef, searchParamRef
        }
        setData(newdata)
    }

    useEffect(() => {
        console.log(data)

    }, [data])


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
        <SearchBar handleClick={handleClick} />

        {/*  */}
        <button onClick={fetchFunc}>fetch</button>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={postFunc}>post</button>
        {/*  */}

        <DisplayFeature />
    </div>
}

export default Page1