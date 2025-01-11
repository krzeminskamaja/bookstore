import { Box, Card, CardContent, CardMedia, Container, FormControl, Grow, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import './App.css';
import { mainTheme } from './styles/theme';
import Slide from '@mui/material/Slide';
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

function Calendar() {
    const [show, setShow] = React.useState(false); 
    const [currentDate, setCurrentDate] = React.useState<Dayjs | null>(dayjs(new Date()));
    const [currentAppointments, setCurrentAppointments] = React.useState([]);
    const [currentAppointment, setCurrentAppointment] = React.useState<string>(); 
    const [visitDiary, setVisitDiary] = React.useState(new Map()); 

    const addVisitDiaryDay: any = (dateString: any | Dayjs) => {
        const newVisits = [];
        const newDateString = dateString.format("DD-MM-YYYY")
        for(var i=11;i<15;i+=0.5){
          newVisits.push(i.toString());
        }
        const copyDiary=new Map(visitDiary);
        copyDiary.set(newDateString.toString(),newVisits);
        setVisitDiary(copyDiary);
        //console.log(visitDiary)
    }

    const getAppointments: any = (dateString: any | Dayjs) => {
      //console.log(dateString);
     // console.log(visitDiary.get(dateString.format("DD-MM-YYYY")));
      return visitDiary.get(dateString.format("DD-MM-YYYY"));
    }

    function getDate() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      return `${date}${month}${year}`;
    }

    const handleAppointmentChange = (event: any) => {
      setCurrentAppointment(event.target.value);
      console.log(event.target.value)
    };

  React.useEffect(() => { 
    //console.log(currentDate);
    addVisitDiaryDay(currentDate);
    setCurrentAppointments(getAppointments(currentDate))
    /*let scrollPosition = 0;

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
    */
  }, [currentDate]) 

  React.useEffect(()=>{
    console.log(currentAppointment)
  },[currentDate])

  return (
    <Container sx={{ height: '100%' }} >
        <Card
        sx={{marginTop:'10%',background:mainTheme.palette.primary.main,display:'flex','flexDirection':'row-reverse',boxShadow:2}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker           value={currentDate}
          onChange={(newValue) => {if(newValue) setCurrentDate(newValue)} }/>
        </LocalizationProvider>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currentAppointment}
    label="Age"
    onChange={handleAppointmentChange}
  >
    {currentAppointments?.map((label: any)=><MenuItem>{label}</MenuItem>)}
  </Select>
</FormControl>
            <CardContent 
            sx={{display:'flex',flexDirection:'column-reverse',alignContent:'end'}}>
                <Grow in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 2000 } : {})}>
                <Typography variant='body1' textAlign='right' color={mainTheme.palette.text.primary}>
                {}
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

export default Calendar;