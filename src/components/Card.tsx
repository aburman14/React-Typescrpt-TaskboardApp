import React from 'react'
import { FaTasks} from "react-icons/fa";
// import { IconContext } from "react-icons";
import {useTaskList} from '../context/Context'

import { FiTrendingUp ,FiAlertCircle} from "react-icons/fi";



export default function Card() {
  const {settasklist,tasklist}= useTaskList()

  return (
    <div className='card-container'>
    <div className='card1'>
    <div ><FaTasks  /></div>
       <p>Total Tasks</p> 
       <h2>{tasklist.length}</h2>

    </div>
    <div className='card2'>
    <div ><FiTrendingUp /></div>
       <p>In Progress</p>
       <h2>
        {
          tasklist.filter((item)=>{
            if(item.status==='In progress'){

            return item
            }
          }).length
        }
       </h2>
    </div>
    <div className='card3'>
    <div ><FiAlertCircle /></div>
        <p>Pending Tasks</p>
        <h2>
        {
        tasklist.filter((item)=>{
            if(item.status==='Blocked'){

            return item
            }
          }).length
        }
        </h2>
    </div>
    </div>
  )
}