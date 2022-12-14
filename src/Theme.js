import * as React from 'react';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//implementing  theme function using meterial UI

export default function Theme({ mode, setMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Button sx={{ marginLeft: "auto" }}
      startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      color="inherit"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
      {mode === "dark" ? "light" : "dark"} mode
    </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}