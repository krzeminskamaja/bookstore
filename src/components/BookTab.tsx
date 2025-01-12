import {  Button, ButtonGroup, Card, Container, Typography } from '@mui/material';
import '../App.css';
import { mainTheme } from '../styles/theme';
import React from 'react';
import { books } from '../mockData/books';
import BookDetail from './BookDetail';
import StyledCard from './StyledCard';
import Title from './Title';
import StyledButtonGroup from './StyledButtonGroup';
import StyledTypography from './StyledTypography';

function BookTab() {
    const [selectedBook,setSelectedBook] = React.useState({id:0,title:"",author:"",year:0});
    
    const handleOnClick = (e:any) => {
    let bk = books.filter(book => book.title==e.target.textContent)
    if(bk.length>0)
        setSelectedBook(bk[0])
   }
  

  return (
    <Container sx={{ height: '100%' }} >
      <Title/>
      <StyledCard marginBottomValue='50%'>
      <StyledTypography>All books</StyledTypography>
      <StyledButtonGroup>
        {
            selectedBook?.year!=0 ?
                <Card>
                    <BookDetail id={selectedBook.id} title={selectedBook.title} author={selectedBook.author} year={selectedBook.year}/>
                    <Button onClick={()=>setSelectedBook({id:0,title:"",author:"",year:0})}>Close</Button>
                </Card> 
                : 
                <StyledButtonGroup>
                    {books.map((book:any)=>(
                        <Button key={book.id} onClick={handleOnClick}>
                            <Typography color={mainTheme.palette.primary.light}>{book.title}</Typography>
                        </Button>
                    )) }
                </StyledButtonGroup>
        }
      </StyledButtonGroup>
      </StyledCard>
    </Container>
  );
}

export default BookTab;