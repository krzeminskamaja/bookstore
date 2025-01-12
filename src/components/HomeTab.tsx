import { Container, List, ListItem, TextField } from '@mui/material';
import '../App.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { books } from '../mockData/books';
import StyledCard from './StyledCard';
import Title from './Title';
import StyledTypography from './StyledTypography';

function HomeTab() {
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
    setFilteredBooks(books.filter(book => book.title.includes(searchTerm)))
    handleSearch(null);
  },[searchTerm])

  return (
    <Container sx={{ height: '100%' }} >
      <Title/>
      <StyledCard marginBottomValue='0%' >
        <form style={{width:"100%"}}>
          <TextField id="outlined-basic" onChange={(e)=>setSearchTerm(e.target.value)} label="Search for books" sx={{ width: '100%' }}  />
        </form> 
      </StyledCard>
      <StyledCard marginBottomValue='50%'>
        <StyledTypography>Newest finds</StyledTypography>
        <List sx={{marginTop:"5%"}}>
          {
            searchTerm=="" ?
              newestFinds.map((book:any)=>(
                <ListItem>{book.title}</ListItem>
              )) 
              : 
              filteredBooks.map((book:any)=>(
                <ListItem>{book.title}</ListItem>
              ))
          }
        </List>
      </StyledCard>
    </Container>
  );
}

export default HomeTab;