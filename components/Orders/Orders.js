import React, {useEffect, useState, useCallback } from 'react'

const Order = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    
    const fetch_data = useCallback(async() => {
        setLoading(true)
        const url = "https://food-order-app-3bd04-default-rtdb.firebaseio.com/orders.json"
        const response = await fetch(url)
        const data = await response.json()
        let dataArr = []
        for (var key in data){
            dataArr.push({id:key, name:data[key].name, order:data[key].order})
        }
        setOrders(dataArr)
        setLoading(false)
    }, [])   
        
    useEffect (() => {
        fetch_data()
    }, [fetch_data])  
    return(
        <div style = {{height:"100vh", width:"100%", background:"white", textAlign:"center"}}>
            <h1 style = {{textAlign:"center"}}>Recent orders</h1>
            <div style = {{height:"80%", width:"90%", background:"pink", display:"block", margin:"auto", borderRadius:"5px", padding:"10px", overflow:"scroll"}}>
            {!loading? 
                orders.map(p => {
                    return  <div><h3>{p.name}</h3>
                        <ul style = {{listStyle:"none"}}>
                            {p.order.map(x => {
                                return <li>{x.Title}</li>
                            })}
                        </ul>
                        </div>
                })
                 : <h4 style = {{textAlign:"center"}}>Loading...</h4>}
            </div>
        </div>
    )
}

export default Order