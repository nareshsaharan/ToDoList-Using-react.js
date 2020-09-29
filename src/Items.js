import React from 'react'
import './Items.css'

import {FaCheckCircle} from 'react-icons/fa'


const Items = (props) =>{
    if(props.done)
    {
        return (
            <div className="item">
                <div className="txt" > {props.text} </div>
               <div className="icon comp" onClick={props.completeTask}> <FaCheckCircle/> </div>
            </div>  
        )
    }
    else{
        return (
            <div className="item">
                <div className="txt" > {props.text} </div>
               <div className="icon" onClick={props.completeTask}> <FaCheckCircle/> </div>
            </div>  
        )
    }
    
}

export default Items;
