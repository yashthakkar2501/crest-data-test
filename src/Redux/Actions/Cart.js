import * as Actions from '../Actions/ActionConstants'

export const addToCart =(item)=>{
  return{
    type:Actions.ADD_TO_CART,
    cartItem:item
  }
}
export const removeFromIternary = ( uid ) =>{
  return{
    type:Actions.REMOVE_FROM_ITERNARY,
    uid
  }
}