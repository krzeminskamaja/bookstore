import { Card } from '@mui/material';
import { mainTheme } from '../styles/theme';

interface StyledCardProps{
  marginBottomValue: string,
  children: React.ReactNode
}

const StyledCard: React.FC<StyledCardProps> = ({marginBottomValue,children})=> {

  return(
    <Card sx={{marginBottom:marginBottomValue,marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex',boxShadow:2,width:"100%"}}>
      {children}
    </Card>
  )

};


 

export default StyledCard;