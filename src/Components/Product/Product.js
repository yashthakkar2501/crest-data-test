import React ,{useState} from 'react'
import Button from '../UI/Button/Button'
import './Product.css'


import {connect} from 'react-redux'
import {addToCart,removeFromIternary} from '../../Redux/Actions/Cart'
const Product = ({uid,productName,productImage,description,clickedAddCart,productprice,productrating,showButtonControls,addToCart,removeIternary,CartState,InternaryState,columnView}) =>{
  const fewProducts= InternaryState.find(ele=>ele.uid===uid).stock<=5
  const [disableButton,setDisableButton]=useState(false)
  const [limitReached,setLimitReached] = useState(false)
  const buttonClickHandler = ( )=>{
    const productItem=CartState.find(uidCheck=>uidCheck.uid===uid)
    const iternoryItem = InternaryState.find(uidCheck=>uidCheck.uid===uid)
    if(iternoryItem.stock<=0){
      setDisableButton(true)
    }
    if(productItem.limit===productItem.quantityAdded){
      setLimitReached(true)
      setDisableButton(true)
      return
    }
    addToCart(productItem)
    removeIternary(uid)
  } 
  //const image = requ)
  return(
    <article className={`Product ${columnView?'row':'column'}`} onClick={()=>{}}>
    <h4>
        {productName}
    </h4>
    <hr />
    <div>
        <img alt="" src={productImage}/>
    </div>
    <div>
    <p><i>{description}</i></p>
    </div>
    <hr/>
    <div className="Price">

     <b>Rs {productprice}/-</b>
        <b>{productrating}*</b>
    </div>
    {limitReached &&<div>
      <small style={{color:'red'}}><i>Cannot add more items</i></small>
    </div>}
    <div>
     {fewProducts && !disableButton && <small style={{color:'tomato'}}><i>only few products left</i></small>}
     {disableButton && !limitReached && <small style={{color:'red'}}><i>Sorry we are out of stock cannot add more items</i></small>} 
    </div>
    {CartState.find(ele=>ele.uid===uid).quantityAdded>0 &&
    <div>
      Quantity : {CartState.find(ele=>ele.uid===uid).quantityAdded}
    </div>}
   <div onClick={()=>{}}>
    <Button show={showButtonControls} disabledbool={disableButton} clicked={()=>{buttonClickHandler()}}>Add to Cart</Button>
   </div>
</article>
  )

}

const mapStateToProps = state =>{
  return{
    CartState:state.Cart,
    InternaryState:state.Iternary
  }
}

const mapPropsToDispatch = (dispatch) =>{
  return{
    addToCart:(item)=>dispatch(addToCart(item)),
    removeIternary:(uid)=>dispatch(removeFromIternary(uid))
  }
}

export default connect(mapStateToProps,mapPropsToDispatch) (Product)