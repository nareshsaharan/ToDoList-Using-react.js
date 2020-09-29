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

      let newItem = this.state.currItem;     
      if(newItem.text.trim().length>0)
      {
        let item = [newItem,...this.state.items]
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

finish = (id) =>{
  let item = [...this.state.items]
  for(let i=0;i<item.length;i++)
  {
    if(item[i].id === id)
    {
        item[i].done = true;
        let curr = item.splice(i,1);
        item.push(curr[0])
        break;
    }
  }
// console.log(item);
  this.setState({
    items : item
  })
}


render(){
  let items = null;

  

  items = (
    this.state.items.map((e)=>{
     // console.log(e)
      return(
        <Items text={e.text} id={e.id} done={e.done}
        completeTask = {()=>this.finish(e.id)}/>

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
