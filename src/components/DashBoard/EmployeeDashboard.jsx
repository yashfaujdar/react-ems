import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <Header/>
        <TaskListNum />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard