import React, { useState } from 'react'
import './Todocss.css'

const Todo2 = () => {
  const [name, setName] = useState("")
  const [nameList, setNameList] = useState([])

  function handleSubmit(){
    setNameList([...nameList,name]);
    setName('');
  }
  function deleteName(i){
    const e = i.target.value;
    const updatedName = nameList.filter((elem, index)=>{
      return e!= index;
    })
    setNameList(updatedName);
  }
  function allDelete(){
    setNameList([]);
  }
  return (
    <>
    <div><h2>Todo List 2</h2></div><br/>
    <div>
      <input type='text' placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
      <button onClick={handleSubmit}>Add Name</button>
    </div>
    <p>Hare Your Name List</p>
    {nameList!=[] && nameList.map((data,index) =>{
      return(
        <div key={index}>
          <div> &nbsp; {data} &nbsp;&nbsp;
          <button onClick={deleteName} value={index}>Delete</button>
          </div>
        </div>
      ) 
    })}
    { nameList.length>=1 &&
          <button onClick={allDelete}>All Delete</button>}
    </>
  )
}

export default Todo2