import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'

const TaskList = ({data}) => {
    console.log(data);
  return (
    <div id='TaskList' className='h-[60vh] w-full max-w-[95%] mx-auto flex items-center mt-10 px-2 overflow-x-auto flex-nowrap gap-6 justify-start py-6'>
        {data.tasks.map((elem) => {
            if(elem.activeTask) {
                return <AcceptTask/>
            }
            if(elem.failed) {
                return <FailedTask/>
            }
            if(elem.newTask) {
                return <NewTask/>
            }
            if(elem.completed) {
                return <CompletedTask/>
            }
        })}


    </div>
  )
}

export default TaskList