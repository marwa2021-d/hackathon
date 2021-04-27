import React, { useRef } from "react"

const SearchBar = (props)=>{
    const searchParamRef = useRef("")
    const inputRef = useRef("")
    return<header className="searchbar">
        <ul>
            <li>
                <input type="text" placeholder="insert Url for translation" ref={inputRef}></input>
            </li>
            <li>
                <select ref={searchParamRef}>
                    <option disabled selected value> -- select a language -- </option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Arabic">Arabic</option>
                    <option value="English">English</option>
                </select>
            </li>
            <li>
                <button className="submit-button" onClick={()=>props.handleClick(searchParamRef.current.value,inputRef.current.value)}>submit</button>
            </li>
        </ul>
    </header>
}

export default SearchBar