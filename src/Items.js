import React from 'react'
import './Items.css'

import {FaCheckCircle} from 'react-icons/fa'


const Items = (props) =>{
    //console.log(props)
    if(props.done === true)
    {
        return (
            <div className="item">
                <div className="txt comp" > {props.text} </div>
               <div className="icon col" > <FaCheckCircle/></div>
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
