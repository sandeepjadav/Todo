import React, { useState } from 'react'

const Tode3 = () => {
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    function handleSubmit(){
        setData([...data,name]);
        setName('');
    }
    function handleDelete(i){
        const e = i.target.value;
        const updateData = data.filter((ele,index) =>{
            return e !=index;
        });
        setData(updateData);
    }
    function allDelete(){
        setData([]);
    }

  return (
    <>
    <div>
        <div>Todo List 3 class fuction</div>
        <input type="text" placeholder='Please Enter Your Name' value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={handleSubmit}>Add Name</button>
        {data.map((myd,index) => {
            return(
                <div key={index}>{myd}
                <button value={index} onClick={handleDelete}>Delete</button>
                </div>
            )
        })}
        {data.length>=1 && <button onClick={allDelete}>All Delete</button>}
    </div>
    </>
  )
}

export default Tode3