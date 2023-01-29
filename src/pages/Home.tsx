import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import List from '../components/List';
import Newtask from '../components/Newtask'
import Alltask from '../components/Alltask';
// import { TaskListProvider } from '../context/Context';
import {useTaskList} from '../context/Context'


import React,{ useState }  from 'react'
import Edittask from '../components/Edittask';

type Props = {}

const Home = (props: Props) => {
  const [modal,setmodal]=useState<boolean>(false)
  const {setisalltask,isalltask,tasklist,isedit,item}=useTaskList()
  return (
    <div className="App">
      <h1>Taskboard</h1>
     <div className='container'>
      <Sidebar setmodal={setmodal}/>
      {/* { modal ===true ?<Newtask  setmodal={setmodal}/>:
      isalltask === false ?<div className='main'>
        <h2>Overview</h2>
        <Card />
        <List />      
      </div>:<Alltask/>
  } */}

  {modal && <Newtask  setmodal={setmodal}/>}
  {isedit && <Edittask item={item} test='testing'/>}
  <div className='main'>
        <h2>Overview</h2>
        <Card />
        {isalltask ===true ?<Alltask/> :<List />}  
 
        </div>
        {/* {isalltask &&  <Alltask/> } */}

     </div>
    </div>
  )
}

export default Home




