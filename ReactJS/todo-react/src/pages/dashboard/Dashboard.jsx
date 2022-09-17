import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const logout=()=> {
    navigate("/login");
  }
  return (
    <div>
      <div><Button variant="contained" onClick={logout}>Logout</Button></div>

    </div>
  )
}

export default Dashboard;