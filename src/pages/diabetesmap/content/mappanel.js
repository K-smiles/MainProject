import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import Grid from "@mui/material/Grid";

import SearchMap from './search';
import HospitalGoogleMap from './hospitalmap'
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
            <Grid item>
            <MKBox
              mx={-1}
              mt={-3}
              sx={{
                width: {
                  xs: 300, // theme.breakpoints.up('xs')
                  sm: 500, // theme.breakpoints.up('sm')
                  md: 700, // theme.breakpoints.up('md')
                  lg: 900, // theme.breakpoints.up('lg')
                  xl: 1000, // theme.breakpoints.up('xl')
                  xxl:1200
                },
                height: {
                  xs: 300, // theme.breakpoints.up('xs')
                  sm: 500, // theme.breakpoints.up('sm')
                  md: 700, // theme.breakpoints.up('md')
                  lg: 900, // theme.breakpoints.up('lg')
                  xl: 1000, // theme.breakpoints.up('xl')
                  xxl:1200
                },
              }}
            >
              {children}
            </MKBox>
          </Grid>
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
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MKBox sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="GP Locations" {...a11yProps(0)} />
          <Tab label="Hospital Location" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <SearchMap />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HospitalGoogleMap />
      </CustomTabPanel>
    </MKBox>
  );
}
