import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import IntroToMUI from './IntroToMUI';
import Sidebar from './comps/sidebar';
import Navbar from "./comps/navbar"
import Feed from './comps/feed';
import Rightbar from './comps/rightbar';
import { Box, Container, createTheme, Stack } from '@mui/material';
import AddPosts from './comps/AddPosts';
import { Mode } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

function App() {


  return (
    <div>
      <Box
        // sx={{ backgroundColor: "black", color: "white" }}
      >
        <Navbar />
        <Stack direction='row' justifyContent="space-between" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPosts />
      </Box>
    </div>
  );
}

export default App;
