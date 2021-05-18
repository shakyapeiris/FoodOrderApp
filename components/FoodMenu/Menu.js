import React, { useEffect, useState, useContext } from 'react'
import classes from './Menu.module.css'
import Item from './SingleItem'
import styled from 'styled-components'
import Cart from '../Cart/Cart'
import CartStaus from '../Store/CartStore'

const AddBtn = styled.button`
    height:50px;
    width:50px;
    border-radius:50%;
    background-color:aquamarine;
    border:none;
    cursor:pointer;
    transition:0.5s all ease-out;
    margin-bottom:-50px;
    font-weight:bold;
    &:hover{
    background-color:#033c8c;
    color:white;
}
`


const Menu = () => {

    const [MENU_DATA, setMenuData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const ctx = useContext(CartStaus)

    const fetchData = async() => {
        const url = ""//Enter your link to firebase db here
        const response = await fetch(url)
        const data = await response.json()

        

        setMenuData(data)
        setIsLoaded(true)
    }

    useEffect(() => {fetchData()}, [])

    const seItemHandler = (index) => {
        let item = MENU_DATA[index]
        ctx.addCart(item)
    }

    return(
        <>
        { ctx.isCart && ctx.cart.length !== 0 ? 
            <div className = {classes.Box}>
                <Cart />
            </div> 
        :   <div className = {classes.Box}>
                <h2>Our Menu</h2>
                {isLoaded ? MENU_DATA.map((p, index) => {
                    return(<Item key = {p.id} title = {p.Title} price = {p.Price} image = {p.Image}><AddBtn onClick = {() => seItemHandler (index)}>Add</AddBtn></Item>)
                }) : <h2>Loading...</h2>}
            </div>
        }
        </>
    )
}

export default Menu
