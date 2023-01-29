import React from 'react'
import {useTaskList} from '../context/Context'
import Table from './Table'
import { FaTrash,FaEdit } from "react-icons/fa";

type Props = {}
type recentprops={
    id:number,
    title:string,
    description:string,
    status:string,
    created:Date
  }

const Alltask = (props: Props) => {
    const {settasklist,tasklist,setedit,setitem,setisalltask}= useTaskList()

    const deleteitem=(id:number):void=>{
        // settasklist((prevlist:recentprops[])=>{
        //   let newlist:recentprops[]
        //   newlist=prevlist.filter((item:recentprops)=>item.id!==id)
          // return newlist
          ;
          let  newlist=tasklist.filter((item)=>item.id!==id)
          settasklist(newlist)
      }

      const handleupdate=(item:recentprops)=>{
        setedit(true)
        setitem(item)
        setisalltask(false)
        
      }

      if(tasklist.length===0){
        return (
          <h2>No Tasks to display</h2>
        )
      }

else{
  return (
    <div className='list-container'>
        <h2 className='bold'>All Tasks</h2>
        <table className='table'>
         <tbody>
        <tr className='header'>
         <th>Id</th>
         <th>Title</th>
         <th>Description</th>
         <th>Status</th>
         <th>Created Time</th>
        </tr>
        <tr>
         {
          tasklist.map((item)=>{
            return <>
            <th>{item.id}</th>
            <th>{item.title}</th>
            <th>{item.description}</th>
            {item.status==='New' && <th className='new'>{item.status}</th>}
            {item.status==='In progress' && <th className='progress'>{item.status}</th>}
            {item.status==='Completed' && <th className='completed'>{item.status}</th>}
            {item.status==='Blocked' && <th className='blocked'>{item.status}</th>}
            <th>{item.created.toDateString()}</th>
            <th onClick={()=>deleteitem(item.id)}><FaTrash  style={{fill:'red'}}/></th>
            <th><FaEdit  onClick={()=>handleupdate(item)}style={{fill:'orange'}}/></th>
            </>
          })
         }
        </tr>
         </tbody>
     </table>
  
    </div>
  )
}
}

export default Alltask