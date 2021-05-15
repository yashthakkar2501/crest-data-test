import React from 'react'
import './ToolBar.css'
import CartImage from '../../../assets/Cart.jpg'
import Button from '../../UI/Button/Button'
const ToolBar=(props)=>
{ let classes;
    if(props.Cssbool){ classes="Success"}
    else{classes=""}
    return(
    <div className="Toolbar">
        <Button clicked={props.toogleViewhandler}>Switch to {props.columnView?'Column':'Row'} </Button>
        <h3 style={{marginTop:"15px"}}>Phone Mart</h3>
        <div  onClick={props.clickedTool}>
        <img alt="Product Image" className={classes} src={CartImage}/></div>
    </div>
)}
export default ToolBar