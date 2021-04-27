import React, { useRef } from "react"

const SearchBar = (props)=>{
    const searchParamRef = useRef("")
    const inputRef = useRef("")
    return<>
        <ul>
            <li>
                <input type="text" placeholder="insert Url for translation" ref={inputRef}></input>
            </li>
            <li>
                <select ref={searchParamRef}>
                    <option value="leng1">leng1</option>
                    <option value="leng2">leng2</option>
                    <option value="leng3">leng3</option>
                </select>
            </li>
            <li>
                <button onClick={()=>props.handleClick(searchParamRef.current.value,inputRef.current.value)}>submit</button>
            </li>
        </ul>
    </>
}

export default SearchBar