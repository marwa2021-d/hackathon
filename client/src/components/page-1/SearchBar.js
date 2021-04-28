import React, { useRef } from "react"

const SearchBar = (props)=>{
    const inputRef = useRef("")
    return<header className="searchbar">
        <ul>
            <li>
                <input type="text" placeholder="insert Url for translation" ref={inputRef}></input>
            </li>
            <li>
                <button onClick={()=>props.handleClick(inputRef.current.value)}>submit</button>
            </li>
        </ul>
    </header>
}

{/* <li>
<select ref={searchParamRef}>
    <option value="Hebrew">Hebrew</option>
    <option value="Arabic">Arabic</option>
    <option value="English">English</option>
</select>
</li> */}


export default SearchBar