import * as React from 'react';
import Box from '@mui/material/Box';
import MenuBook from '@mui/icons-material/MenuBook';
import Home from '@mui/icons-material/Home';
import { ThemeProvider } from '@emotion/react';
import {mainTheme} from './styles/theme';
import Personal from './Personal';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Calendar from './Calendar';
import HomeTab from './components/HomeTab';
import BookTab from './components/BookTab';

export default function IconTabs() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={mainTheme}>
    <Box bgcolor={mainTheme.palette.primary.dark}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant='fullWidth' onChange={handleChange} aria-label="lab API tabs example" style={{ 
          position: 'fixed' , 
          top: 0 , 
          width: '100%',
          background: mainTheme.palette.primary.light,
          opacity: '50%'
          // Add other styles as needed
        }}>
            <Tab icon={<Home />} aria-label="person" value="0" />
            <Tab icon={<MenuBook />} aria-label="calendar" value="2" />
          </TabList>
        </Box>
        <TabPanel value="0"><HomeTab/></TabPanel>
        <TabPanel value="2"><BookTab/></TabPanel>
      </TabContext>
    </Box>
    </ThemeProvider>
  );
}