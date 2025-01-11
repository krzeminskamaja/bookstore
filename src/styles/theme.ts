import {  createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
    palette: {
      primary: {
        main: '#4f2d4d',
        light: '#d3bdcf',
        dark:'#200e27'
      },
      secondary: {
        main: '#355d34',
        light: '#89af8f',
        dark:'#15270e'
      },
      background:{
        paper:'#140e27'
      },
      text:{
        primary:'#ede4eb'
      }
    },
  });