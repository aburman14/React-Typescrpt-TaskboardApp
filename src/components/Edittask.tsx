import React, { useState } from 'react'
import {useTaskList} from '../context/Context'


type itemprops={    
    item: 
    {
    id:number;
    title:string;
    description:string;
    status:string;
    created:Date;
    };
    test:string
}

type testprops=string


const Edittask = ({item: {id, title, description,status,created},test:test}:itemprops) => {
const {settasklist,tasklist,setedit,isedit,setisalltask
}= useTaskList()

// const [show,setshow]=useState<boolean>(isedit)
const [updtitle,settitle]=useState(title)
const [upddescription,setdescription]=useState(description)
const [updstatus,setstatus]=useState(status)
const handlesubmit=(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    const temp_val=tasklist.map((item)=>{
            if(item.id===id){
                return {...item,description:upddescription,title:updtitle,status:updstatus}                
            }
            return item
        })
    settasklist(temp_val)
    setedit(false)
    setisalltask(false)
}
//  const getvalue=(e: React.ChangeEvent<HTMLSelectElement>)=>{
//     console.log(e.target.value)
//  }

  return (    
  <>
  {
   isedit && <div className='form'>
        <form className='form-ul' >
            <div className='form-ul-header'>
            <div className='header-row'>
            <h1>Edit Task</h1>
            <p>Status: <select value={updstatus} onChange={(e)=>setstatus(e.target.value)}>
                <option value='New'>New</option>
                <option value='In progress'>In progress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
                
                </select>
            </p>
            </div>
            <button onClick={()=>setedit(false)}>X</button>
            </div>
            {/* <label>Title</label> */}
            <input className='inp' value={updtitle}placeholder='Add Title' 
                  onChange={(e)=>settitle(e.target.value)}
                  />
            {/* <label>Add Note</label> */}
            <textarea placeholder='Add Note' value={upddescription} 
            onChange={(e)=>setdescription(e.target.value)} 
            ></textarea>
            <button className='button-29' onClick={handlesubmit}>Submit</button>
        </form>
    </div>
}
    </>
  )
    
}

export default Edittask