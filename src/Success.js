import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

//for successfull login function

export default function Success({name}) {
  const navigate = useNavigate();
  return (
    <div className='successpage'>
      <h1>Welcome {name}</h1>
      <Button variant="contained" onClick={() => navigate("/")}type='button'>LogOut</Button>
    </div>
  );
}


