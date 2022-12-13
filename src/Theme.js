import * as React from 'react';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//theme function
export function Theme({ mode, setMode }) {
  return (
    <Button sx={{ marginLeft: "auto" }}
      startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      color="inherit"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
      {mode === "dark" ? "light" : "dark"} mode
    </Button>
  );
}
