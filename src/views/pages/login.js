import React, {useState} from 'react'

const login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   
   const submitLogin = () => {
      
   }
   
    return (
        <h2>
          Ini adalah halaman Login
          <form onSubmit={() => submitLogin()}>
             <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
             <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
             <button type="submit" title="Login" />
          </form>
        </h2>
    )
}

export default login
