import { Card, Typography } from '@mui/material';
import { mainTheme } from '../styles/theme';

interface StyledTypographyProps{
  children: React.ReactNode
}

const StyledTypography: React.FC<StyledTypographyProps> = ({children})=> {

  return(
    <Typography variant='h4' color={mainTheme.palette.primary.dark}>{children}</Typography>
  )

};


 

export default StyledTypography;