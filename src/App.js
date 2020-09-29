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
      id:"",
      done:false
    }
  }

 addTask = ()=>
  {

      const newItem = this.state.currItem;     
      if(newItem.text.trim().length>0)
      {
        const item = [newItem,...this.state.items]
        
        this.setState({
          items : item,
          currItem :{
            text:"",
            id:"",
            done:false
          }
        })
      }
      
      this.nameInput.focus();
  }

 handleInput = (e) =>
 {
      this.setState({
        currItem :{
          text:e.target.value,
          id:Date.now(),
          done:false
        }
      })  
 }
 
 componentDidMount(){
  this.nameInput.focus();
}

_handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    this.addTask();
  }
}

finish = (id,done) =>{
  const item = [...this.state.items]
  for(let i=0;i<item.length;i++)
  {
    if(item[i].key === id)
    {
        const curr = item.splice(i,1);
        curr.done = true;
        item.
        break;

    }
  }
}


render(){
  let items = null;

  

  items = (
    this.state.items.map((e)=>{
      return(
        <Items text={e.text} id={e.id} 
        completeTask = {this.finish(e.id,e.done)}/>

      )
    })
  )



  return (  
    <div className="app">
      <h1><FaCheckSquare/> Hello TODO </h1>
      <div className="main-div">
          <input ref={(input) => { this.nameInput = input; }} className="in" type="text" placeholder="Enter Text" 
          onChange={this.handleInput} value={this.state.currItem.text} onKeyDown={this._handleKeyDown}></input>
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
