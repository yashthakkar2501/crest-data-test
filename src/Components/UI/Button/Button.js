import React from 'react'
import './Button.css'
const Button=({show,clickedminus,disabledbool,clicked,children,clickedplus})=>{
    return(
        <div>
          {show? <button onClick={clickedminus}>-</button>:null}
    <button disabled={disabledbool} onClick={clicked} className="Button">{children}</button>
   {show? <button onClick={clickedplus}>+</button>:null}
    </div>
    )
}
export default Button;