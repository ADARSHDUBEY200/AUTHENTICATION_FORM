import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""

  });



  const handleFormData = (event) => {

    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value }
    })
  }


  const handleForm = async (event) => {

    event.preventDefault();

    try {

      const { data } = await axios.post("https://authentication-backend-zf91.onrender.com", { ...formData }, { withCredentials: true });

      const { success, message } = data;
      console.log("THIS IS THE DATA OF THE SIGNUP : " + data);
      console.log("THIS IS THE SUCCESS OF THE SIGNUP : " + success);
      console.log("THIS IS THE MESSAGE IN THE SIGNUP IS : " + message);

      if (success) {
        const SignUpInterval = setInterval(() => {
          navigate("/")
        }, 1000);

        setTimeout(() => {
          clearInterval(SignUpInterval);
        }, 2000);

      } else {
        console.log("THE MESSAGE COMING FROM THE SERVER IS " + message)
      }



    } catch (error) {

      console.log("Something went wrong " + error)

    }

    setFormData({
      email: "",
      username: "",
      password: ""
    })
  }

  return (
    <div className='form_container'>

      <form onSubmit={handleForm}>
        <h2>SIGNUP YOUR ACCOUNT</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='ENTER YOUR EMAIL' name="email" value={formData.email} onChange={handleFormData} />
        </div>
        <br />
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" id='em' placeholder='ENTER YOUR USERNAME' name='username' value={formData.username} onChange={handleFormData} />

        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' value={formData.password} onChange={handleFormData} />
        </div>

        <button type='submit'> Submit</button>

        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>

      </form>

    </div>
  )
}

export default Signup