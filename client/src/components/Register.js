import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [emailvalidation,setEmailvalidation] = useState("")
    const [password,setPassword] = useState("")
    const [passwordvalidation,setPasswordvalidation] = useState("")
    const [confirmpassword,setConfirmpassword] = useState("")
    const [passworderror,setPassworderror] = useState("")
    const [ProjectId,setProjectId] = useState("")
    const [Business_Unit,setBusiness_Unit] = useState("")
    

    const PostData= (e)=>{
        e.preventDefault();
        const MinLengthofpassword = 10;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const specialCharRegex = /[!@#$%^&*]/;
        const MathDigit = /\d/;
        const emailRegex = /^[a-zA-Z0-9._-]+@ltimindtree\.com$/;

        if (!emailRegex.test(email)) {
            setEmailvalidation("use ltimindtree domain");
            return;
          } else {
            setEmailvalidation("");
          }

        
          
          if (
            password.length < MinLengthofpassword ||
            !uppercaseRegex.test(password) ||
            !lowercaseRegex.test(password) ||
            !specialCharRegex.test(password) ||
            !MathDigit.test(password)
          ) {
            setPasswordvalidation(
              "Password is not strong enough. Use lower char, upper char, digit and special char"
            );
            return;
          } else {
            setPasswordvalidation("");
          }

          if (password !== confirmpassword) {
            setPassworderror("password doesn't match");
            return;
          } else {
            setPassworderror("");
          }
          

        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password,
                ProjectId,
                Business_Unit

            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert("saved")
                navigate('/Login')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={PostData} className="form-container">
      <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            />
            <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            {emailvalidation && <p className="passworderror">{emailvalidation}</p>}
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            {passwordvalidation && <p className="passworderror">{passwordvalidation}</p>}

            <input
            type="password"
            placeholder="confirm password"
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
            required
            />
            {passworderror && <p className="passworderror">{passworderror}</p>}
            <input
            type="text"
            placeholder="project id"
            value={ProjectId}
            onChange={(e)=>setProjectId(e.target.value)}
            required
            />
            <input
            type="text"
            placeholder="bu"
            value={Business_Unit}
            onChange={(e)=>setBusiness_Unit(e.target.value)}
            required
            />
        
        <button  className="Submitbtn" type='submit' >
          Register
        </button>
        {/* {isValidEmail==false && (<p >Invalid domain</p>)} */}
      </form>
    </div>
  )
}

export default Register
