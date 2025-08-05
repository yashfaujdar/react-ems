import React, { useContext, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
   const AuthData = useContext(AuthContext)
  

  const handleLogin = (email , password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
    }else if (AuthData && AuthData.employees.find((emp) => emp.email === email && emp.password === password)) {
      setUser('user')
    }else {
      alert('Invalid credentials')
    }
  }

 

  return (
    
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''} 
    {user === 'admin' ? <AdminDashboard /> : ''}
    {user === 'user' ? <EmployeeDashboard /> : ''}
    </> 
  )
}

export default App