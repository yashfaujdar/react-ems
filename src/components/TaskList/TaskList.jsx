import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'

const TaskList = ({data}) => {
    console.log(data);
  return (
    <div id='TaskList' className='h-[60vh] w-full max-w-[95%] mx-auto flex items-center mt-10 px-2 overflow-x-auto flex-nowrap gap-6 justify-start py-6'>
        {data.tasks.map((elem , idx) => {
            if(elem.activeTask) {
                return <AcceptTask key={idx}/>
            }
            if(elem.failed) {
                return <FailedTask key={idx}/>
            }
            if(elem.newTask) {
                return <NewTask key={idx}/>
            }
            if(elem.completed) {
                return <CompletedTask key={idx}/>
            }
        })}


    </div>
  )
}

export default TaskList