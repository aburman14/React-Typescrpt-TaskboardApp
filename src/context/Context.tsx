import { createContext,useContext,useState ,ReactNode} from "react";

type TaskListProviderProps = {
    children: ReactNode
  }

  type tasklistprops={
    id:number,
    title:string,
    description:string,
    status:string,
    created:Date
  }

  const intialstate={
    id:0,
    title:'',
    description:'',
    status:'',
    created:new Date()
  }

  type Bool=boolean
  type TaskListContext={
    tasklist:tasklistprops[],
    settasklist:(tasklist:tasklistprops[])=>void,
    isalltask:boolean,
    setisalltask:(isalltask:boolean)=>void,
    isedit:boolean,
    setedit:(isedit:boolean)=>void,
    item:tasklistprops,
    setitem:(item:tasklistprops)=>void
  }

const TaskListContext=createContext({} as TaskListContext)

export function useTaskList(){
    return useContext(TaskListContext)
}

export function  TaskListProvider({children}:TaskListProviderProps){

    const [tasklist,settasklist]= useState<tasklistprops[]>([])
    const [isalltask,setisalltask]=useState<Bool>(false)
    const [isedit,setedit]=useState<Bool>(false)
    const [item,setitem]=useState<tasklistprops>(intialstate)
    return (
        <TaskListContext.Provider value={{settasklist,tasklist,isalltask,setisalltask,isedit,setedit,item,setitem}}>
            {children}
        </TaskListContext.Provider>
    )
}