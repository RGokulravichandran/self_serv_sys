import './App.css';
import * as React from 'react';
import {useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Route, Routes} from 'react-router-dom';
import { Theme } from './Theme';
import { PageNotFound } from './PageNotFound';
import { ForgotUserName } from './ForgotUserName';
import { Home } from './Home';
import { Register } from './Register';


//main app function
export default function App() {

  const [mode, setMode] = useState("light")
//using meterial UI implementing theme
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
{/* routers for routes to pages */}
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

