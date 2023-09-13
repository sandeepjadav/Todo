import React from 'react'
import { useState } from 'react';

const HomeTodo = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(){
    setData([...data,name]);
    setName("");
  }
  function remove(i){
    const e = i.target.value;
    const updatedata = data.filter((element,index) =>{
      return e != index;
    });
    setData(updatedata);
  }
  function All_remove(){
    setData([]);
  }
  return (
    <>
    <h2>Home Todo List</h2>
    <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
    <button onClick={handleSubmit}>TODO Add</button>
    <p>Show Your Todo List</p>
    {data.map((item,index)=>{
      return(
        <>
        <div key={index}>{item}</div>
        <button value={index} onClick={remove}>Remove</button><br/><br/>
        </>
      )
    })}
    {data.length>=1 && <button onClick={All_remove}>All Remove</button>}
    </>
  )
}

export default HomeTodo