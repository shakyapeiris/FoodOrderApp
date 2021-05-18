import React, {useContext} from 'react'
import classes from './Header.module.css'
import CartStaus from '../Store/CartStore'

const Header = () => {
    const ctx = useContext(CartStaus)
    let value = ctx.cart.length
    return(
        <div className = {classes.Box}>
            <h4>My Food Order App</h4>
            <div >
                <button onClick = {ctx.showCart}>{ctx.isCart && ctx.cart.length !== 0 ?"Add more"    : "Cart | " + value}</button>
            </div>
            
        </div>
    )
}

export default Header