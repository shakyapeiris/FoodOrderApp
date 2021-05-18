import React, {useContext, useState} from 'react'
import CartStaus from '../Store/CartStore'
import styled from 'styled-components'
import CheckOutForm from '../CheckOutForm/CheckOut'

const TotalBar = styled.div`
    background: rgb(121,9,30);
    background: linear-gradient(121deg, rgba(121,9,30,1) 0%, rgba(94,0,0,1) 0%, rgba(250,12,12,1) 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    display:flex; 
    padding:8px;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid black;
`


const Cart = () => {
    const ctx = useContext(CartStaus)
    let total = 0
    for (var x = 0; x<ctx.cart.length; x++){
        total = total + ctx.cart[x].Price
    }
    const [checkOut, setCheckout] = useState(false)

    const checkOutShowHandler = () => {
        setCheckout(checkOut => !checkOut)
    }
    return(
        <>
            {checkOut  === false ? <div>
                <h1 style = {{textAlign:"center"}}>Cart</h1>
                {ctx.cart.map((p, index) => {
                    return <div key = {Math.random()} style = {{display:"flex", padding:"8px" ,justifyContent:"space-between", alignItems:"center"}}><h3>{index + 1}.{p.Title}</h3><h3>{p.Price} <button onClick = {() => ctx.deleteCart(index)}>Delete</button></h3></div>
                })}
                
                <TotalBar><h3>Total</h3><h3>{total}</h3></TotalBar>
            <button onClick = {checkOutShowHandler}>Check out</button>
            </div> : <div>
                <CheckOutForm />
                    <button onClick = {checkOutShowHandler}>Back</button>
                </div>}
        </>
    )
}



export default Cart