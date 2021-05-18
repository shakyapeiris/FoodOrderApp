import React from 'react'

const Button = (props) => {
    return <button style = {{padding:"10px", borderRadius:"5px", background:props.background, color:props.color}}>{props.children}</button>
}

export default Button