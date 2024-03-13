import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext.js'

function Login() {

    const [username, setUsername]= useState("")
    const [password, setPassword] = useState("")

    //setUser came from props, passed in UserContext file
    const {setUser}=useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //global variables is fetched 
        setUser({username, password})
}



  return (
      <div>
          <h2>Login</h2>
          <input type='text'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder='username' />
          <br/>
          <input type='text'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='password' />
          <br/>
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login