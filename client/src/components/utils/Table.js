import React, { useEffect, useState } from "react"
import {Link } from "react-router-dom";


const Table = (props)=>{
    const [innerdata,setInnerData] = useState([])

    useEffect(()=>{
        setInnerData(props.givenData)
    },[props])


    return <>
    <table>
        <tr>
            <th>request number</th>
            <th>requested Url</th>
            <th>answered</th>
        </tr>
        {innerdata.map((item,index)=>{
            return <tr key ={index} onClick={props.tableClick}>
                <td>{index}</td>
                <td>{item}</td>
                <td>true</td>
                <td><Link to={`/translation/${index}`}style={{ textDecoration: "none" }}> move to</Link></td>
            </tr>
        })}
    </table>
    </>
}

export default Table