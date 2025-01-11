import { Box, Button, Card, CardContent, CardMedia, Container, FormControl, Grow, List, ListItem, TextField, Typography } from '@mui/material';
import '../App.css';
import { mainTheme } from '../styles/theme';
import Slide from '@mui/material/Slide';
import React, { useEffect } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { books } from '../mockData/books';

function HomeTab() {
    const [show, setShow] = React.useState(false); 
    const [searchTerm,setSearchTerm] = React.useState('');
    const navigate = useNavigate();
    const newestFinds = books.slice(0,3);
    const [filteredBooks,setFilteredBooks] = React.useState(books);

   
  
    const handleSearch = (event: any) => {
  
      if(event)event.preventDefault();
      if(searchTerm!="")
        navigate(`?query=${searchTerm}`);
      else
        navigate(``);
  
    };

  React.useEffect(()=>{
    setFilteredBooks(books.filter(books => books.includes(searchTerm)))
    handleSearch(null);
  },[searchTerm])

  React.useEffect(() => { 

    let scrollPosition = 0;

    const pageHeight = document.body.offsetHeight;
    const viewportHeight = window.innerHeight;

    function handleScroll() {
      const newScrollPosition = window.scrollY;

      if (newScrollPosition === scrollPosition) {
        return;
      } 

      if (newScrollPosition < 0 || newScrollPosition + viewportHeight > pageHeight) {
        return;
      }

      const shouldShow = newScrollPosition > scrollPosition; 
      setShow(shouldShow); 

      scrollPosition = newScrollPosition; 
    }

    window.addEventListener('scroll', handleScroll, {passive: true});

    // ADDED
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, []) 
  return (
    <Container sx={{ height: '100%' }} >
      <Card sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex',boxShadow:2,width:"100%"}} >
      <form style={{width:"100%"}}>
        <Box display="flex" flexDirection="row" >
      <TextField id="outlined-basic" onChange={(e)=>setSearchTerm(e.target.value)} label="Search for books" sx={{ width: '100%' }}  />
      </Box>
      </form> 
      </Card>
      <Card sx={{marginBottom:'50%', marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex','flexDirection':'row',boxShadow:2}}>
      <Grow in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 1000 } : {})}>
                <Typography variant='h4' textAlign='left' color={mainTheme.palette.text.primary}>Newest finds
                </Typography>
                </Grow>
      <List sx={{marginTop:"5%", display:"block"}}>
        {searchTerm==""?newestFinds.map((book:string)=>(
          <ListItem sx={{display:"block"}}>{book}</ListItem>
        )) : filteredBooks.map((book:string)=>(
          <ListItem sx={{display:"block"}}>{book}</ListItem>
        ))}
      </List>
      </Card>
      
    </Container>
  );
}

export default HomeTab;