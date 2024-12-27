import { useState } from "react";
import CartContext from './CartContext.js'

const CartState=(props)=>{
    const host = "http://localhost:5000";
     const [info,setInfo]=useState({price1:0,count1:0,price2:0,count2:0,price3:0,count3:0,price4:0,count4:0});
     
     

     const addCart = async (product1,product2,product3,product4)=>{
        const response = await fetch(`${host}/api/order/add`, {
            method: "POST",
            body: JSON.stringify({product1,product2,product3,product4}),
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const data=await response.json();
        
        
        }
//edit cart







    return (
        <CartContext.Provider value={{ info,setInfo,addCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartState;