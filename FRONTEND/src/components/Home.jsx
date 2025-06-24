import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies  from "js-cookie";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");

  useEffect(() => {

    const verifyCookie = async () => {

      const token = Cookies.get("token");

      // await new Promise(resolve => setTimeout(resolve, 5000));

      if (!token) {
        navigate("/login");
      }

      console.log("the cookie in first render is : "+token);

      const { data } = await axios.post("https://authentication-backend-zf91.onrender.com", {}, { withCredentials: true });


      const { status, user } = data;
      console.log("THE DATA COMING IN HOME " + data);
      console.log("THE STAUTUS COMING IN HOME " + status);
      console.log("THIS IS THE USER IN HOME  : " + user);
      setusername(user);


      if (status) {
        console.log("user logged in ")
      } else {
        Cookies.remove("token");
        navigate("/login ")
      };
    }

    verifyCookie();

  }, [Cookies,navigate]);

  const Logout = () => {
    Cookies.remove("token");
    navigate("/login");
  }
  return (
    <div className="home_page">
      <h2>WELCOME {username}</h2>

      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Home