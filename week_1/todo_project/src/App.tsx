import { useEffect, useState } from 'react'
import './App.css'
import { taskIcon } from './assets/icons'
import axios from 'axios';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { allTodosState, todoAtomFamily } from './store/atoms/todoAtom';

function App() {
  const [showTodoCreator, setShowTodoCreator] = useState(false);

  const allTodos = useRecoilValue(allTodosState);
  const initializeTodos = useRecoilCallback(({set}) => () => {
    allTodos.foreach((todo:any) => set(todoAtomFamily(todo._id), todo))
  })

  // useEffect(() => {
  //   initializeTodos();
  // },[allTodos])

  useEffect(() => {
    axios.get("/api/todos")
    .then((data) => {
      // setTodos(data.data.data)
      console.log(data.data.data)
    })
    .catch((error) => { 
      console.log(error)
    })
  },[])

 
  const closeFunc = () => setShowTodoCreator(false);
  return (
    <div className='flex w-screen h-screen overflow-hidden justify-center items-center bg-[#242525] relative'>
      <div className='w-[30rem] p-[20px] bg-[#4c5044] rounded-md text-white flex flex-col items-center'>
        <h3 className='text-[20px] font-bold'>Todos</h3>
        <div className='todo-list flex flex-col w-full py-[15px] gap-[10px]'>
          allTodos
        </div>
        <div>
          <button 
          className='px-[15px] py-[8px] bg-[#ccff12] text-black font-bold rounded-md'
          onClick={() => {setShowTodoCreator(prev => !prev)}}
          
          >Add Todo</button>
        </div>
      </div>
      {
        showTodoCreator ? <TodoCreator func={closeFunc}/> : <></>
      }
    </div>
  )
}

const Todo = ({todo}:any) => {
  
  return(
    <div className='flex justify-between items-center bg-[#66695e] w-full py-[5px] rounded-md px-[10px]' key={todo._id}>
      <div className='flex gap-[10px] items-center'>
        <TodoIcon lebel={todo.lebel} />
        <div className='flex flex-col'>
          <span className='text-[14px] font-bold text-[#f2ffea] '>{todo.title}</span>
          <span className='text-[12px] text-[#bdbdbd]'>{todo.description}</span>
        </div>
      </div>
      <div className=' p-[5px] cursor-pointer'>
        <i className='bx bxs-trash-alt'></i>
      </div>
    </div>
  )
}
const TodoIcon = ({lebel}:any) => {

  const[icon, setIcon] = useState({
    lebel: '',
    png: ''
  })
  useEffect(() => {
    const icon:any = taskIcon.find(icon => icon.lebel == lebel)
    if(icon){
      setIcon(icon)
    }
    
  },[lebel])
  return (
    <div className='w-[45px] cursor-pointer rounded-full aspect-square bg-[#ccff12] flex justify-center items-center'>
      <img src={icon.png} alt="" className='w-[60%]' />
    </div>
  )
} 


const TodoCreator = ({func}: any) => {
  const [selectedLebel, setSelectedLebel] = useState('CODE')
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDes, setTodoDes] = useState('')

  const createTodo = () => {
    const todo = {
      title: todoTitle,
      description: todoDes,
      lebel: selectedLebel,
    }

    axios.post('/api/create', todo)
    .then((res) => {
      console.log(res);
      
    }).catch(e => console.log(e))

    func();
  }
  return(
      <div className='w-screen h-screen blur-filter bg-[#da2d2d5b] absolute z-[10] flex justify-center items-center '>
        <div className='w-[18rem] px-[15px] py-[20px] bg-[#504d4d] rounded-md relative flex flex-col gap-[20px]'>
          <div 
          className="exit w-[30px] aspect-square rounded-full bg-[#817b7b] flex justify-center items-center absolute top-[-10px] right-[-10px] text-[#ff7d66] text-[15px] cursor-pointer"
          onClick={() => {
            func()
          }}
          >
            <i className="fa-solid fa-x"></i>
          </div>
          <div className="task-icons flex justify-center items-center gap-[12px] flex-wrap">
            {
              taskIcon.map(item => (
                <div 
                key={item?.lebel} 
                className='w-[45px] cursor-pointer rounded-full aspect-square bg-[#ccff12] flex justify-center items-center overflow-hidden relative'
                onClick={() => setSelectedLebel(item?.lebel)}
                >
                  <img src={item?.png} alt="" className='w-[60%]' />
                  <div className={`bg-[#1b1b1b96] text-[white] flex justify-center items-center text-[25px] font-bold w-full h-full absolute top-0 left-0 ${selectedLebel == item?.lebel ? "":"hidden"}`}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="input-box flex flex-col gap-[10px]">
            <input 
            type="text"
            className=' border-none outline-none px-[10px] py-[5px] text-white w-full rounded-md bg-[#3f3e3e] text-[14px]'
            placeholder='Todo title'
            onChange={e => setTodoTitle(e.target.value)}
            value={todoTitle}
            />
            <textarea 
            className=' border-none outline-none px-[10px] py-[5px] text-white w-full rounded-md bg-[#3f3e3e] text-[14px]'
            placeholder='Write Somthing about this todo'
            rows={4}
            onChange={e => setTodoDes(e.target.value)}
            value={todoDes}
            />
          </div>

          <button className='px-[15px] py-[8px] bg-[#ccff12] rounded-md font-bold' onClick={createTodo}>ADD</button>
        </div>
      </div>
  )
}

export default App
