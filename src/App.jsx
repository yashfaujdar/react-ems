import React, { useContext, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInuser')
  
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
   }
  }, [])
  
  

  const handleLogin = (email , password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInuser', JSON.stringify({ role: 'admin'}))
    }else if (AuthData) {
      const employee = AuthData.employees.find((emp) => emp.email === email && emp.password === password)
      if (employee) {
        setUser('user')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInuser', JSON.stringify({ role:'employee' }))
      }
      
    }else {
      alert('Invalid credentials')
    }
  }

 

  return (
    
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''} 
    {user === 'admin' ? <AdminDashboard /> : ''}
    {user === 'user' ? <EmployeeDashboard data={LoggedInUserData} /> : ''}
    </> 
  )
}

export default App