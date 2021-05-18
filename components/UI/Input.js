import React from 'react'

const Input = (props) => {
    return(
        <div>
            <label htmlFor = {props.id}>{props.label}</label>
            <input type = {props.type || "text"} onchange = {props.onchange || null} onBlur = {props.onBlur || null} value = {props.value} id = {props.id} />
        </div>
    )
}

export default Input