import React from 'react'

import styled from 'styled-components'



const Item = props => {




    return(
        <Container image = {props.image}>
            <h3>{props.title}</h3>
            <div>
            <h3 style = {{textAlign:"center"}}>{props.price}</h3>
            {props.children}
            </div>
            
        </Container>
    )
}

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid black;
transition:0.5s all ease;
padding:20px;
cursor:pointer;
&:last-child{
    border:none
}
&:hover{
    background:url(${props => props.image});
    background-position:center;
    background-size:cover;
    background-attachment:fixed;
    background-repeat:no-repeat;
    color:#bd1a23;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.3);
    font-weight:bolder;
}
`

export default Item