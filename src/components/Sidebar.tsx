import React, { useState } from 'react'
import Createnew from '../pages/Createnew'
import {useTaskList} from '../context/Context'

interface  modalprops{
  // setmodal:React.Dispatch<React.SetStateAction<any>>;
  setmodal: (value: boolean) => void
}

const Sidebar = (props:modalprops) => {

  const {setisalltask,isalltask}=useTaskList()

  const gobackhome=()=>{
    props.setmodal(false)
    setisalltask(false)
  }

  return (
    <div className='sidebar'>
       <button className='link' onClick={gobackhome}>Home</button>
       <button className='link' onClick={()=>{props.setmodal(true);setisalltask(false)}}>Create New</button>
       <button className='link' onClick={()=>{setisalltask(true); props.setmodal(false)}} >All Tasks</button>
      </div>
  )
}

export default Sidebar