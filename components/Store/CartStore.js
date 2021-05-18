import React, { useState } from 'react'

const CartStaus = React.createContext({
    isCart : false,
    showCart : () => {},
    cart:[],
    addCart : () => {},
    deleteCart : () => {},
    reset : () => {},
    orders:[],
    pushOrders : () => {},
})

export const CartStausProvider = (props) =>{
    const [show, setShow] = useState(false)
    const [catItems, setCartItems] = useState([])

    const showCartToggleHandler = () => {
        if (catItems.length > 0){
            let val = show
            setShow(!val)
        }
        else{
            setShow(show => show)
        }
        
    }
    let [dataSet, setDataArr] = useState([])
    const push_data = (data) => {
        let dataArr = []
        for (var key in data){
            dataArr.push({id:key, name:data[key].name, order:data[key].order})
        }
        setDataArr(dataArr)
    }

    const resetCart = () => {
        setCartItems([])
        setShow(false)
    }

    const setItem = (item) => {
        setShow(false)
        let arr = [...catItems]
        arr.push(item)

        setCartItems(arr)
    }
    const deleteItem = (index) => {
        let arr = [...catItems]
        arr.splice(index, 1)
        setCartItems(arr)
    }
    
    return(
        <CartStaus.Provider value = {{orders:dataSet, pushOrders:push_data,reset:resetCart,isCart:show, showCart:showCartToggleHandler, cart : catItems, addCart:setItem, deleteCart:deleteItem}}>{props.children}</CartStaus.Provider>
    )
}

export default CartStaus;