import React from 'react'
import './Items.css'

import {FaCheckCircle} from 'react-icons/fa'


const Items = (props) =>{
    return (
        <div className="item">
            <div className="txt" > {props.text} </div>
           <div className="icon"> <FaCheckCircle/> </div>
        </div>
        

    )
}

export default Items;
