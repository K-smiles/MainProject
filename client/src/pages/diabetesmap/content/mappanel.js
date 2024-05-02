import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MKBox from 'components/MKBox';
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import SearchMap from './search';
import HospitalGoogleMap from './hospitalmap'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Backdrop from '@mui/material/Backdrop';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MKBox sx={{ p: 4 }} >
          <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
            {children}
          </Grid>
        </MKBox>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MapPanel() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleOpen();
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <MKBox sx={{ width: '100%' }}>
    
      <Box>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
        sx={{ '.MuiTab-root': { fontSize: '1.25rem', fontWeight: 'bold', padding: '20px 30px' } }}
          textColor="secondary"
          indicatorColor="secondary"
          >
          <Tab label="GP Locations" iconPosition="start" icon={<LocalHospitalIcon />} {...a11yProps(0)} />
          <Tab label="Hospital Location" iconPosition="start" icon={<MedicalInformationIcon />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <SearchMap updateOpen={() => handleClose()} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HospitalGoogleMap updateOpen={() => handleClose()} />
      </CustomTabPanel>
    </MKBox>
  );
}
