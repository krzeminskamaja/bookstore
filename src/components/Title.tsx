import { Card, Typography } from '@mui/material';
import { mainTheme } from '../styles/theme';



const Title = ()=> {

  return(
    <Typography sx={{marginTop:'3%',color:mainTheme.palette.primary.light}} variant="h1" textAlign="center">Books4You</Typography>
  )

};


 

export default Title;