import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

//for failed login function
export default function Failure() {
  const navigate = useNavigate();
  return (
    <div className='failurepage'>
      <h1>User Name Invalid</h1>
      <Button variant="contained" onClick={() => navigate("/")} type='button'>back </Button>  
    </div>
  );
}
