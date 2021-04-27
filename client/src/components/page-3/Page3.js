import React from "react"

const Page3 =()=>{
    const getLinks =()=>{
        Object.entries(localStorage).map((key,value)=>{
            console.log(key,value)
        })
    }
    return <>
        proccessed Links
        <button onClick={getLinks}>workit</button>
    
    </>
}

export default Page3