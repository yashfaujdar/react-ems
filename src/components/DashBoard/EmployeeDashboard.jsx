import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <Header data={data} />
        <TaskListNum data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard