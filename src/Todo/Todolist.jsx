import React, { useState } from 'react'
import './Todocss.css'

const Todolist = () => {
    const [activity, setActivity] = useState("");
    const [listData, setListData] =useState([]);
    function handleSubmit(){
        setListData([...listData, activity])
        setActivity('');
    }
    function removeActivity(e){
        const i= e.target.value;
        const updatedListData = listData.filter((elem,index)=>{
            return i!=index;
        })
        setListData(updatedListData);
    }
    function removeAll(){
        setListData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div><br/>
        <input type='text' placeholder='Enter Activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
        <button className='Add_btn' onClick={handleSubmit}>Add</button>
        <p className='listheading'>Here Your List : </p>
        {listData!=[] && listData.map((data,i) =>{
            return(
                <>
                <p className='list_todo' key={i}>
                    <div className='showlist'>{data}</div>
                    <div className='remove_btn'><button value={i} onClick={removeActivity}>Remove</button></div>
                </p>
                </>
            )
        })}
        {listData.length>=1 &&
        <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}

export default Todolist