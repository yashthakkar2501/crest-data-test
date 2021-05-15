import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import './Cart.css'
const Cart = ({cartItems}) =>{
  const [totalPrice,setTotalPrice] = useState(0)
  useEffect(()=>{
    let total=0;
    cartItems.forEach(cartItem => {
      total+=cartItem.quantityAdded*cartItem.price
    });
    setTotalPrice(total)
  },[cartItems])
  const cartProducts=cartItems.map((product,index)=>{
  
   return ( product.quantityAdded>0 &&
       <tr key={product.uid}>
            <td>{product.name}</td>
    <td>{product.quantityAdded}</td>
            <td>{product.price}</td>
            <td></td>
        </tr>)
})
  return(
    [<h2 id="title"><i>Cart Page</i></h2>,
    <div className="table">
      
        <hr/>
        <table id="CartTable">
            <thead>
        <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
        
        </tr>
        </thead>
        <tbody>
        {cartProducts}
        </tbody>
        </table>
    </div>,
    <hr/>,
<h3><i>Total Price : </i>Rs {totalPrice}</h3>]
  )
}

const mapStateToProps =state =>{
  return{
    cartItems:state.Cart
  }
}
 
export default connect(mapStateToProps)(Cart) 