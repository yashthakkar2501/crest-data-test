import React,{useState} from 'react'
import Toolbar from '../UI/ToolBar/ToolBar'
import {ProductsItem} from '../../constants/products'
import Product from '../Product/Product';
import './Products.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import Modal from '../UI/Modal/Modal'
import Cart from '../Cart/Cart'
const Products =()=>{
  const [products,setProducts] = useState(ProductsItem)
  const [showCart,setShowCart] = useState(false)
  const [columnView,setColumnView] =useState(localStorage.getItem('view')==='true')

  const productJSX = ()=>{
    return products.map(product=> <Product
      key={product.uid}
      uid={product.uid}
      productName={product.name} 
      productImage={product.filename} 
      description={product.description}
      productprice={product.price}
      productrating={product.rating}
      columnView={columnView}
      clickedAddCart={()=>{}} />)
  }
  const toogleViewhandler=()=>{
   
    setColumnView(prevState=>{
      localStorage.setItem('view',!prevState)
      return !prevState
    })
  }
  return(
 
        [ <Toolbar Cssbool={localStorage.getItem('itemAdded')==='true'} clickedTool={()=>setShowCart(true)} columnView={columnView} toogleViewhandler={toogleViewhandler}/>,
           <div className="Products">
              {productJSX()}
                <Backdrop show={showCart} clicked={()=>setShowCart(false)}/>
                <Modal show={showCart}>
                {showCart && <Cart/>}
               </Modal>
           </div> ]
   
  )
}

export default Products