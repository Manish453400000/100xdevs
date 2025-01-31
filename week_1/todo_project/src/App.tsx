import './App.css'
import { taskIcon, training } from './assets/icons'

function App() {

  return (
    <div className='flex w-screen h-screen overflow-hidden justify-center items-center bg-[#242525] relative'>
      <div className='w-[30rem] p-[20px] bg-[#4c5044] rounded-md text-white flex flex-col items-center'>
        <h3 className='text-[20px] font-bold'>Todos</h3>
        <div className='todo-list flex flex-col w-full py-[15px] gap-[10px]'>
          <Todo />
          <Todo />
        </div>
        <div>
          <button className='px-[15px] py-[8px] bg-[#ccff12] text-black font-bold rounded-md'>Add Todo</button>
        </div>
      </div>
      <div className='w-screen h-screen blur-filter bg-[#da2d2d5b] absolute z-[10] flex justify-center items-center'>
        <div className='w-[20rem] px-[10px] py-[20px] bg-[#504d4d] rounded-md'>
          <div className="task-icons flex items-center justify-center gap-[5px] flex-wrap">
            {
              taskIcon.map(icon => (
                <TodoIcon icon={icon} />
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

const Todo = () => {
  return(
    <div className='flex justify-between items-center bg-[#66695e] w-full py-[5px] rounded-md px-[10px]'>
      <div className='flex gap-[10px] items-center'>
        <TodoIcon icon={training} />
        <div className='flex flex-col'>
          <span className='text-[14px] font-bold text-[#f2ffea] '>Go to gym</span>
          <span className='text-[12px] text-[#bdbdbd]'>Hit the gym before 09:00 </span>
        </div>
      </div>
      <div className=' p-[5px] cursor-pointer'>
        <i className='bx bxs-trash-alt'></i>
      </div>
    </div>
  )
}

const TodoIcon = ({icon}:any) => {
  return (
    <div className='w-[45px] rounded-full aspect-square bg-[#ccff12] flex justify-center items-center'>
      <img src={icon} alt="" className='w-[60%]' />
    </div>
  )
} 

export default App
