import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";

// condition for form validation using formik and yup
 const formValidationShema = yup.object({
  name:yup.string().min(4, "Need a bigger User Name").required("Why not fill this feild"),
  email:yup.string().min(6, "Need a bigger email").required("Why not fill this feild"),
  password:yup.string().min(8, "Need a bigger password").required("Why not fill this feild"),
});

//register function to perfome post operation in api
export function Register() {
  const newUser = (values) => {
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  };
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formValidationShema,
    onSubmit: (values) => {
      console.log("The form values are", values);
      newUser(values);
    },
  });
  return (
    <form onSubmit={handleSubmit} className='userLoginForm'>
      <h1>Registration</h1>

      <TextField name='name' id="outlined-basic" type='text' label="User Name" variant="outlined" value={values.name} onChange={handleChange} error={touched.name && Boolean(errors.name)} onBlur={handleBlur} helperText={touched.name && errors.name ? errors.name : null}/>
      
      <TextField name='email' id="outlined-basic" type='email' label="Email" variant="outlined" value={values.email} onChange={handleChange} error={touched.email && Boolean(errors.email)} onBlur={handleBlur} helperText={touched.email && errors.email ? errors.email : null} />
      
      <TextField name='password' id="outlined-basic" type='password' label="Password" variant="outlined" value={values.password} onChange={handleChange} error={touched.password && Boolean(errors.password)} onBlur={handleBlur} helperText={touched.password && errors.password ? errors.password : null}/>
      
      <Button variant="contained" type='Submit'>Submit</Button>
      <Link onClick={() => navigate("/")} component="button" variant="body2">Sign in</Link></form>
  );
}
