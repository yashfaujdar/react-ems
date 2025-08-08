import React from 'react'
import { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskPriority, setTaskPriority] = useState('low')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({taskTitle, taskDate, taskPriority, category, description, activeTask: false, failed: false, completed: false, newTask:true})
        
        const data = JSON.parse(localStorage.getItem('employees')) || []

        data.forEach(function(elem) {
            if (elem.firstName === assignTo) {
                elem.tasks.push(newTask)
                console.log(elem)
            }
        })
        setAssignTo('')
        setCategory('')
        setDescription('')
        setTaskTitle('')
        setTaskDate('')
        setTaskPriority('low')

        localStorage.setItem('employees', JSON.stringify(data))
    }
  return (
    <div className='bg-[#1c1c1c] mt-7 rounded px-10 py-5'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full gap-4'>
                <div className='w-[48%]'>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                         value={taskTitle}
                         onChange={(e) =>{ 
                            setTaskTitle(e.target.value)}}
                         className='bg-[#2c2c2c] outline-none text-gray-300 p-2 rounded w-4/5' type="text" placeholder='Enter task title' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Deadline</h3>
                        <input
                         value={taskDate}
                         onChange={(e) =>{ 
                            setTaskDate(e.target.value)}}
                         className='bg-[#2c2c2c] outline-none text-gray-300 p-2 rounded w-4/5' type="date" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Priority</h3>
                        <select
                         value={taskPriority}
                         onChange={(e) =>{ 
                            setTaskPriority(e.target.value)}}
                         className='bg-[#2c2c2c] outline-none text-gray-300 p-2 rounded w-4/5'>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                         value={assignTo}
                         onChange={(e) =>{ 
                            setAssignTo(e.target.value)}}
                         className='bg-[#2c2c2c] outline-none text-gray-300 p-2 rounded w-4/5' type="text" placeholder='Enter employee name' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                         value={category}
                         onChange={(e) =>{ 
                            setCategory(e.target.value)}}
                         className='bg-[#2c2c2c] outline-none text-gray-300 p-2 rounded w-4/5' type="text" placeholder='Design, Development, Testing, etc.' />
                    </div>
                </div>

                <div className='w-[48%]'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                         value={description}
                         onChange={(e) =>{ 
                            setDescription(e.target.value)}}
                            className='bg-[#2c2c2c] w-full text-gray-300 p-2 rounded h-[290px] outline-none' 
                            placeholder='Enter task description'
                        ></textarea>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button className='bg-emerald-600 text-white p-2 rounded mt-4 px-8 hover:bg-emerald-700 transition-colors'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask