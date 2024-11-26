import React, { useState } from 'react'

const Login = () => {
    
        const [credentials,setCredentials] = useState({email: "",password: ""})
        const handleSubmit = async (e)=>{
            e.preventDefault();
            const response = await fetch("https://localhost:3000/api/auth/login",{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email:credentials.email,password:credentials.password})
                
            });
            const json = await response.json()
            console.log(json);
        }
        const onChange=(e)=>{
            setCredentials({...credentials, [e.target.name]:e.target.value})
        }
        

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="mx-4 my-2 mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email"  id="email" aria-describedby="emailHelp"/>
    
            </div>
            <div className="mx-4 my-2 mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
            </div>
  
            <button type="submit" className="btn btn-primary mx-4 my-2" >Submit</button>
        </form>
    </div>
  )
}

export default Login
