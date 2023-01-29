import React, {useState,useEffect} from 'react'
// import { useContext } from 'react'

import {useTaskList} from '../context/Context'
import Edittask from './Edittask'

interface  modalprops{
  setmodal: (value: boolean) => void
}

type title=string

const Newtask = (props: modalprops) => {
  const {settasklist,tasklist,setedit,isedit,setisalltask,isalltask}= useTaskList()
  const [title,settitle]=useState('')
  const [description,setdescription]=useState('')

  const handlesubmit=(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    let id:number
    if(tasklist.length==0){
        id=1
    }
    else{
      let arr=tasklist.slice(tasklist.length-1)
      id=arr[0].id+1
    }
    settasklist([...tasklist,{title:title,id:id,description:description,status:'New',created:new Date()}])
    props.setmodal(false)
    setisalltask(false)

    
  }

  // useEffect(() => {
  //   console.log(tasklist)   
  // }, [tasklist])
  

  // if(isedit === true) 
  //   {
  //     return <Edittask />
  //   }
  //   else return(
  return(
    <div className='form'>
        <form className='form-ul' >
            <div className='form-ul-header'>
            <div className='header-row'>
            <h1>New Task</h1>
            <p>Status: <span>New</span></p>
            </div>
            <button onClick={()=>props.setmodal(false)}>X</button>
            </div>
            {/* <label>Title</label> */}
            <input className='inp' value={title}placeholder='Add Title' 
                  onChange={(e)=>settitle(e.target.value)}/>
            {/* <label>Add Note</label> */}
            <textarea placeholder='Add Note' value={description} onChange={(e)=>setdescription(e.target.value)} ></textarea>
            <button className='button-29' onClick={handlesubmit}>Submit</button>
        </form>
    </div>
  
  )

}

export default Newtask