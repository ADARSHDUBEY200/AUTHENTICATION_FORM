import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });


  const handleFormValue = (event) => {

    setFormValue((currData) => {
      return { ...currData, [event.target.name]: event.target.value }
    })

  }

  const handleForm = async (event) => {
    event.preventDefault();
    // console.log(formValue);

    try {

      const { data } = await axios.post("https://authentication-backend-zf91.onrender.com", { ...formValue }, { withCredentials: true });

      const { success, message } = data;
      console.log("the login data is : " + data);
      console.log("the message of success in login is : " + success);
      console.log("the message in login is : " + message)

      if (success) {
        const LoginInterval = setInterval(() => {
          navigate("/")
        }, 1000);

        setTimeout(() => {
          clearInterval(LoginInterval);
        }, 20000)

        setTimeout
      } else {
        console.log("THIS IS THE MESSAGE COMING FROM THE SERVER : " + message)
      }

    } catch (error) {

      console.log("Something went wrong : " + error)

    }
    setFormValue({
      email: "",
      password: ""
    })
  }


  return (
    <div className='form_container'>
      <form onSubmit={handleForm}>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="text" placeholder='ENTER YOUR EMAIL' id='email' name='email' value={formValue.email} onChange={handleFormValue} />

        </div>

        <div>

          <label htmlFor="password">Password</label>

          <input type="text" placeholder='ENTER YOUR EMAIL' id='password' name='password' value={formValue.password} onChange={handleFormValue} />

        </div>

        <button type='submit'>Submit</button>

        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  )
}

export default Login