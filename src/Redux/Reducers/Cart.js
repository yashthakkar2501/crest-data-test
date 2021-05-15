import * as Actions from '../Actions/ActionConstants'
import {ProductsItem} from '../../constants/products'
import {Inventory} from '../../constants/inventory'
const InitialState = {
  Cart: JSON.parse(localStorage.getItem('cart')) || ProductsItem ,
  Iternary:Inventory,
  totalPrice:0,
  error:null,
  itemAdded:false
}

const reducer = (state=InitialState,action)=>{
  switch(action.type){
    case Actions.ADD_TO_CART:
    //  const itemAdded = state.Cart.find(action.cartItem)
      const imMutate = [...state.Cart]
      const findIndex = imMutate.findIndex(ele=>ele.uid===action.cartItem.uid)
      imMutate[findIndex].quantityAdded++;
      localStorage.setItem('cart',JSON.stringify(imMutate))
      localStorage.setItem('itemAdded',true)
      return {
        ...state,
        Cart:imMutate,
        itemAdded:true
      }
    case Actions.REMOVE_FROM_ITERNARY:
      const finalIternary=[...state.Iternary]
      const Index = finalIternary.findIndex(ele=>action.uid===ele.uid)
      finalIternary[Index].stock--
      return{
        ...state,
        Iternary:finalIternary
      }
    default:
      return state

  }
}

export default reducer