import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { formValidationShema } from './App';
import { FetchApi } from "./FetchApi";

// condition for form validation using formik and yup
export const formValidationShema = yup.object({
  name:yup.string().min(4, "Need a bigger User Name").required("Why not fill this feild"),
});

// main login page as home function
export function Home() {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: ""
    },
    validationSchema: formValidationShema,
    onSubmit: (userdata) => {
      setUserName(userdata.name);
    },
  });
  return (
    <div className='logincontainer'>
      <form onSubmit={handleSubmit} className='userLoginForm'>
        <h1>Login</h1>
        <TextField name='name' id="outlined-basic" type='text' label="User Name" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        {touched.name && errors.name ? errors.name : null}
        <Button variant="contained" type='Submit'>Submit</Button>
        <div className='linkTag'>
          <Link component="button" variant="body2">Forgot User Name?</Link>
          <Link onClick={() => navigate("/register")} component="button" variant="body2">Register</Link>
        </div>
      </form>
      <FetchApi username={username} />
    </div>
  );
}
