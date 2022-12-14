import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FetchApi } from "./FetchApi";
import * as yup from "yup";
import Success from './Success'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// condition for form validation using formik and yup
const formValidation = yup.object({
  name:yup.string().min(4, "Need a bigger User Name").required("Why not fill this feild"),
  password:yup.string().min(8, "Need a bigger password").required("Why not fill this feild")
});

// main login page as home function
export function Home() {
  const [username, setUserName] = useState(null);
  const [userpassword, setUserPassword] = useState(null);
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: formValidation,
    onSubmit: (userdata) => {
      setUserName(userdata.name)
      setUserPassword(userdata.password)
    }
  });
  return (
    <div className='container'>
    <Card className='logincontainer'>
      <form onSubmit={handleSubmit} className='userLoginForm'>
      <CardContent className='cardcontent' >
        <h1>Login</h1>
        <TextField name='name' id="outlined-basic" type='text' label="User Name" variant="outlined" value={values.name} error={touched.name && Boolean(errors.name)} onChange={handleChange} onBlur={handleBlur} helperText={touched.name && errors.name ? errors.name : null} />
        <TextField name='password' id="outlined-basic" type='password' label="Password" variant="outlined" value={values.password} error={touched.password && Boolean(errors.password)} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password ? errors.password : null} />      
       
       <CardActions className='btn' >
          <Button variant="contained" type='Submit'>Submit</Button>
        </CardActions>
        
          <div className='linkTag'>
            <Link component="button" variant="body2">Forgot User Name?</Link>
            <Link onClick={() => navigate("/register")} component="button" variant="body2">Register</Link>
          </div>
      </CardContent>
      </form>
      { username === null ? console.log('1') : <FetchApi loginusername={username} loginuserpassword={userpassword} /> }

      {/* <FetchApi loginusername={username} loginuserpassword={userpassword} */}
    </Card>
    </div>
  );
}
