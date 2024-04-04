import {useState,useEffect} from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./dashboard.css";
import axios from 'axios';

const FormComponent = () => {
const [users, setUsers] = useState([])

useEffect(() => {
  fetch('http://localhost:4000/predictions/users', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
  .then(data =>{
    if(data){
      setUsers(data)
    }
  }).catch(error =>{
    console.log(error);
  })


}, [])
  
  return (
    <Box maxWidth={600} mx="auto">
      <div className="form-container">
        <div className="form-table">
          <div className="form-row">
        
            <div className="form-cell">
              <label htmlFor="name">email</label>
              {[...users].map((user, index) =>{
                return <p key={index}>{user.email}</p>
              })}
             
            </div>
            <div className="form-cell">
              <label htmlFor="email">diseases</label>
              {[...users].map((user, index) =>{
                return <p key={index}>{user.diseases}</p>
              })}
            </div>
          </div>
        </div>
      
      </div>
    </Box>
  );
};

export default FormComponent;
