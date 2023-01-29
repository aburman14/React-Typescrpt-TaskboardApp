import React, { useState,useEffect } from 'react'
import {useTaskList} from '../context/Context'
import { FaTrash,FaEdit } from "react-icons/fa";

type Props = {}

type recentprops={
  id:number,
  title:string,
  description:string,
  status:string,
  created:Date
}

const Table = () => {
  const {settasklist,tasklist,setedit,isedit,setitem}= useTaskList()
  type listprops=typeof tasklist
  const [recent,setrecent]=useState<recentprops[]>([])

  useEffect(() => {
    let temp=tasklist.slice(0).sort();
    setrecent(temp.slice(0,2))  
    
  }, [tasklist])

  const deleteitem=(id:number):void=>{
    // settasklist((prevstate:listprops):listprops|voi=>{
    //    // let newlist:recentprops[]
    //    let newlist=prevstate.filter((item:recentprops)=>item.id!==id)
    //    return newlist
    // })     
      let newlist:recentprops[];
      newlist=tasklist.filter((item:recentprops)=>item.id!==id)
      settasklist(newlist)
  }

  const handleupdate=(item:recentprops)=>{
    setedit(true)
    setitem(item)
    
  }
  

  return (
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
          recent.map((item)=>{
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
            <th onClick={()=>handleupdate(item)}><FaEdit style={{fill:'orange'}}/></th>
            </>
          })
         }
        </tr>
         </tbody>
     </table>
  )
}

export default Table