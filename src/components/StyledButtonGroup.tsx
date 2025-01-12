import { ButtonGroup, Card } from '@mui/material';
import { mainTheme } from '../styles/theme';

interface StyledButtonGroupProps{
  children: React.ReactNode
}

const StyledButtonGroup: React.FC<StyledButtonGroupProps> = ({children})=> {

  return(
    <ButtonGroup orientation='vertical' sx={{marginTop:"5%", display:"flex",flexDirection:"column",width:"100%"}}>
      {children}
    </ButtonGroup>
  )

};


 

export default StyledButtonGroup;