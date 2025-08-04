import React from 'react'
import Headers from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full'>
        <Headers />
        <CreateTask />
    </div>
  )
}

export default AdminDashboard