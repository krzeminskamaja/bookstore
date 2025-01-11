import { Box, Button, Card, CardContent, CardMedia, Container, FormControl, Grow, TextField, Typography } from '@mui/material';
import './App.css';
import { mainTheme } from './styles/theme';
import Slide from '@mui/material/Slide';
import React, { useEffect } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';

function Personal() {
    const [show, setShow] = React.useState(false); 
    const [searchTerm,setSearchTerm] = React.useState('');
    const navigate = useNavigate();

   
  
    const handleSearch = (event: { preventDefault: () => void; }) => {
  
      event.preventDefault();
  
      navigate(`?query=${searchTerm}`);
  
    };

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
      <Card sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex','flexDirection':'row',boxShadow:2}}>
      <form>
      <TextField id="outlined-basic" onChange={(e)=>setSearchTerm(e.target.value)} label="Search for books" variant="outlined" sx={{ width: '100%' }}  />
      <Button type="submit" variant="contained" onClick={handleSearch}>Search</Button>
      </form>
      </Card>
      <Card sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex','flexDirection':'row',boxShadow:2}}>
      <Grow in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 1000 } : {})}>
                <Typography variant='h4' textAlign='left' color={mainTheme.palette.text.primary}>Newest finds
                </Typography>
                </Grow>
      </Card>
      
        <Card
        sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex','flexDirection':'row-reverse',boxShadow:2}}>
            <CardMedia
            component="img"
            image="/doctorFigure.png"
            sx={{ background:mainTheme.palette.primary.light, width:'50%'}}
            />
            <CardContent 
            sx={{display:'flex',flexDirection:'column-reverse',alignContent:'end'}}>
                <Grow in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 2000 } : {})}>
                <Typography variant='body1' textAlign='right' color={mainTheme.palette.text.primary}>
                Jestem super lekarzem blablabla XD 
                Jestem super lekarzem blablabla XD
                Jestem super lekarzem blablabla XD
                Jestem super lekarzem blablabla XD
                </Typography>
                </Grow>
                <Grow in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 1000 } : {})}>
                <Typography variant='h4' textAlign='right' color={mainTheme.palette.text.primary}>O mnie
                </Typography>
                </Grow>
            </CardContent>
        </Card>
    </Container>
  );
}

export default Personal;