import './App.css';
import * as React from 'react';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {Route, Routes} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from 'formik';



export default function App() {

  const [mode, setMode] = useState("light")

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
      <ThemeProvider theme={themeCtx}>
      <Paper
      sx={{
        minHeight: "100vh",
        borderRadius: "0px",
      }}
      elevation={4}>
    <div className="App">
      <div className='navTheme'><Theme mode={mode} setMode={setMode}/></div>

  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgot' element={<ForgotUserName />}/>
      <Route path='*' element={<PageNotFound />}/>
</Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

function FetchApi({username}) { 
  const [user, setUser] = useState([]);
  const apiGet = () => {
    return fetch("https://63678f29f5f549f052d7b19a.mockapi.io/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  return (
    <div>
      <h1>User List</h1>
      {username}
      <ul>
      
        {user.map((userObj) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </div>
    
  );
}

const formValidation = yup.object({
  name:yup.string().min(4, "Need a bigger User Name").required("Why not fill this feild"),
});

function Success(){
  return(
    <div className='successpage'>
      <h1>Successfull login</h1>
    </div>
  )
}

function Failure(){
  return(
    <div className='failurepage'>
      <h1>User Name Invalid</h1>
    </div>
  )
}

function Home(){
  const [username, setUserName] = useState("");
      const navigate = useNavigate();
      const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
        initialValues:{
          name:""
        },
        validationSchema: formValidation,
        onSubmit:(userdata)=>{setUserName(userdata.name)
        },
      })
  return(
    <div className='logincontainer'>
    <form onSubmit={handleSubmit} className='userLoginForm'>
      <h1>Login</h1> 
      <TextField name='name' id="outlined-basic" type='text' label="User Name" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
      {touched.name && errors.name ? errors.name:null}
      <Button variant="contained" type='Submit' >Submit</Button>
      </form>
      <div className='linkTag'>
      <FetchApi username={username}/>
        <Link component="button" variant="body2">Forgot User Name?</Link>
        <Link onClick={()=>navigate("/register")} component="button" variant="body2">Register</Link>
      </div>
    </div>
  )
}

function Theme({mode, setMode}){
  return(
  <Button sx ={{marginLeft:"auto"}} 
  startIcon= {mode === "dark" ? <Brightness7Icon />: <Brightness4Icon/>}
  color="inherit" 
  onClick={()=>setMode(mode === "dark" ? "light" : "dark")}>
    {mode === "dark" ? "light" : "dark"} mode
    </Button>
  )
}


const formValidationShema = yup.object({
  name:yup.string().min(4, "Need a bigger User Name").required("Why not fill this feild"),
  email:yup.string().min(6, "Need a bigger email").required("Why not fill this feild"),
  password:yup.string().min(8, "Need a bigger password").required("Why not fill this feild"),
});


function Register(){
const newUser=(values)=>{
fetch("https://63678f29f5f549f052d7b19a.mockapi.io/users",{
  method: "POST",
  body: JSON.stringify(values),
  headers:{
    "Content-Type": "application/json",
  },
}).then(()=>navigate("/"))
}
  const navigate = useNavigate();
  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    validationSchema: formValidationShema,
    onSubmit:(values)=>{
      console.log("The form values are",values);
      newUser(values)
    },
  })

  return(
    <form onSubmit={handleSubmit} className='userLoginForm'>
    <h1>Registration</h1>

    <TextField name='name' id="outlined-basic" type='text' label="User Name" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
    {touched.name && errors.name ? errors.name:null}
    <TextField name='email' id="outlined-basic" type='email' label="Email" variant="outlined" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
    {touched.email && errors.email ? errors.email:null}
    <TextField name='password' id="outlined-basic" type='password'label="Password" variant="outlined" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
    {touched.password && errors.password ? errors.password:null}
    <Button variant="contained" type='Submit' >Submit</Button>

    <Link
    onClick={()=>navigate("/")}
      component="button"
      variant="body2"
    >
      Sign in
    </Link>
  </form>
  )
}

function ForgotUserName() {
  return(
    
    <div class="botui-app-container" id="help-bot">
      {/* <bot-ui></bot-ui> */}
    </div>

  );
}


function PageNotFound(){
  return(
    <h1>Page Not Found</h1>
  )
}
