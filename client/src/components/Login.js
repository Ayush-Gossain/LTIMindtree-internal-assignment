import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const PostData= ()=>{
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                alert("signed in")
                navigate('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className="login-container">
          <h2>Login</h2>
          <div  className="form-container">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                // required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                // required
              />
            </label>
            <button  className="Submitbtn" onClick={()=>PostData()}>Login</button>
            <p>Don't have an account? <Link to='/Register'>register now</Link></p>
          </div>
        </div>
  )
}

export default Login


  
        
  



