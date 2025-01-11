import { Box, Button, Card, CardContent, CardMedia, Container, FormControl, Grow, List, ListItem, TextField, Typography } from '@mui/material';
import '../App.css';
import { mainTheme } from '../styles/theme';
import Slide from '@mui/material/Slide';
import React, { useEffect } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { books } from '../mockData/books';

function BookTab() {
    const [show, setShow] = React.useState(false); 
    const [searchTerm,setSearchTerm] = React.useState('');
    const navigate = useNavigate();

   
  
    const handleSearch = (event: any) => {
  
      if(event)event.preventDefault();
      if(searchTerm!="")
        navigate(`?query=${searchTerm}`);
      else
        navigate(``);
  
    };

  return (
    <Container sx={{ height: '100%' }} >
      <Card sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex',boxShadow:2,width:"100%"}} >
      <List sx={{marginTop:"5%", display:"block"}}>
        {books.map((book:string)=>(
          <ListItem onClick={()=>console.log('hehe')} sx={{display:"block"}}>{book}</ListItem>
        )) }
      </List>
      </Card>
      
    </Container>
  );
}

export default BookTab;