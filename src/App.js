import React, { Component } from 'react';
import './App.css';
import Items from './Items';
import {FaCheckSquare} from 'react-icons/fa'

class App extends Component{
  
  // items = null;
  state ={
    items : [],
    currItem :{
      text:"",
      key:""
    }
  }

 addTask = ()=>
  {

      const newItem = this.state.currItem.text.trim();     
      if(newItem.length>0)
      {
        const item = [newItem,...this.state.items]

        this.setState({
          items : item,
          currItem :{
            text:"",
            key:""
          }
        })
      }
  }

 handleInput = (e) =>
 {
      this.setState({
        currItem :{
          text:e.target.value,
          key:Date.now()
        }
      })  
 }


render(){
  let items = null;


  items = (
    this.state.items.map((e)=>{
      return(
        <Items text={e}/>
      )
    })
  )



  return (  
    <div className="app">
      <h1><FaCheckSquare/> Hello TODO </h1>
      <div className="main-div">
          <input className="in" type="text" placeholder="Enter Text" onChange={this.handleInput} value={this.state.currItem.text} onFocus={e=>e.currentTarget.select()} ></input>
          <button className="in-btn" onClick={this.addTask} >ADD</button>
          <div className="items-div">
          {items}
          </div>
          
      </div>
     
    </div>
  );

}

}

export default App;
