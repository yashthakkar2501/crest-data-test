import React from 'react'
import './Modal.css'

class Modal extends React.Component
{   
    shouldComponentUpdate(nextProps,nextState)
    {  //For optimizing Modal
       return nextProps.show!== this.props.show }

    render(){
        let Classes=['Modal']
        if(this.props.show===true){Classes=['Modal','ConditionlWidth'].join(' ')}
        return(
            <div className={Classes} onClick={this.props.clickedflag} style={{
                transform:this.props.show ? 'translateX(0)': 'translateX(-100vh)',
                opacity:this.props.show ? '1' : '0',
  
            }}>
                {this.props.children}
            </div>
         
        )
}    
}
export default Modal;