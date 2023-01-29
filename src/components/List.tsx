import React from 'react'
import Table from  '../components/Table'
import {useTaskList} from '../context/Context'

// type Props = {}

export default function List() {
  const {settasklist,tasklist,setedit,setitem,setisalltask}= useTaskList()

if(tasklist.length===0){
  return (
    <h2>No Tasks to display</h2>
  )
}
else{
  return (
    <div className='list-container'>
      <div className='list-container-items'>
        <h2>Last 2 Recent Tasks</h2>
        <p onClick={()=>{setisalltask(true)}}>View All</p>
        </div>
        <Table />
    </div>

  )
}
}