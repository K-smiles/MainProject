import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from "@mui/material/Grid";
import CateTable from 'pages/calculator/content/CateTable';
import MKButton from "components/MKButton";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import age from "assets/riskpicture/age.png"
import gender from "assets/riskpicture/gender.png"
import country from "assets/riskpicture/country.png"
import eth from "assets/riskpicture/eth.png"
import fam from "assets/riskpicture/fam.png"
import frui from "assets/riskpicture/frui.png"
import exer from "assets/riskpicture/exer.png"
import glu from "assets/riskpicture/glu.png"
import smo from "assets/riskpicture/smo.png"
import highp from "assets/riskpicture/highp.png"
import waist from "assets/riskpicture/waist.png"
import ScoreTable from './ScoreTable';
import VisImage from './VisImage';
import VisImage2 from './VisImage2';


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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function BasicTabs() {
  //tab chose
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };
  //country chose
  const [countryValue, setCountryValue] = React.useState(0);

  //score state
  const [score, setScore] = React.useState(
    {
      gender: -1,
      age: -1,
      isEthnicity: -1,
      country: -1,
      pare: -1,
      high_blood_glucose: -1,
      isMedication: -1,
      isSmoke: -1,
      isVe: -1,
      isExercise: -1,
      waist: -1
    })

  //gender change
  const handleGenderChange = (event) => {
    setScore({ ...score, gender: Number(event.target.value) })
    setTabValue(1)
  };

  //Age change
  const handleAgeChange = (event) => {
    setScore({ ...score, age: Number(event.target.value) })
    setTabValue(2)
  };
  //isEthnicity change
  const handleIsEthnicityChange = (event) => {
    setScore({ ...score, isEthnicity: Number(event.target.value) })
    setTabValue(3)
  };
  //country change
  const handleCountryChange = (event) => {
    setCountryValue(event.target.value)
    if (event.target.value == 'asi') {
      setScore({ ...score, country: 2 })
    }
    else {
      setScore({ ...score, country: 0 })
    }
    setTabValue(4)
  };
  //country change
  const handlePareChange = (event) => {
    setScore({ ...score, pare: Number(event.target.value) })
    setTabValue(5)
  };
  // is smoke change
  const handleIsSmokeChange = (event) => {
    setScore({ ...score, isSmoke: Number(event.target.value) })
    setTabValue(6)
  };
  // is veg
  const handleIsVeChange = (event) => {
    setScore({ ...score, isVe: Number(event.target.value) })
    setTabValue(7)
  };
  // is exercise
  const handleIsExerciseChange = (event) => {
    setScore({ ...score, isExercise: Number(event.target.value) })
    setTabValue(8)
  };
  // HGB change
  const handleHBGChange = (event) => {
    setScore({ ...score, high_blood_glucose: Number(event.target.value) })
    setTabValue(9)
  };
  // is medi
  const handleIsMedicationChange = (event) => {
    setScore({ ...score, isMedication: Number(event.target.value) })
    setTabValue(10)
  };
  // waist
  const handleWaisteChange = (event) => {
    setScore({ ...score, waist: Number(event.target.value) })
    setTabValue(11)
  };

  const onClickToDetail = (event) => {
    setTabValue(12)
  };
  return (
    <MKBox sx={{ width: '100%' }} >
      <MKBox bgColor="info" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
          <Tab label="6" {...a11yProps(5)} />
          <Tab label="7" {...a11yProps(6)} />
          <Tab label="8" {...a11yProps(7)} />
          <Tab label="9" {...a11yProps(8)} />
          <Tab label="10" {...a11yProps(9)} />
          <Tab label="11" {...a11yProps(10)} />
          <Tab label="Result" aria-label="phone" {...a11yProps(11)} />
          <Tab label="Detail" aria-label="phone" {...a11yProps(12)} />
        </Tabs>
      </MKBox>
      <CustomTabPanel value={tabValue} index={0} >
        <Grid container >
          <Grid item xs={6} md={8} >
            <FormControl >
              <FormLabel id="demo-controlled-radio-buttons-group" label="asd" ><MKTypography variant="h1" mb={3}>
                Your Gender</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleGenderChange}
                value={score.gender}
              >
                <FormControlLabel value="3" control={<Radio sx={{
                  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                  {
                    color: 'blue',
                  },
                  '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                    color: 'blue',
                  },
                  '&, &.Mui-checked': {
                    color: 'blue',
                  },
                  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                  {
                    stroke: 'blue',
                    strokeWidth: 5,
                  },
                }} />} label={<MKTypography variant="h1" >Male</MKTypography>} />
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Female</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={gender} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <MKTypography variant="h1" mb={3}>
                  What's your age range?
                </MKTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleAgeChange}
                value={score.age}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Under 35</MKTypography>} />
                <FormControlLabel value="2" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >35-44</MKTypography>} />
                <FormControlLabel value="4" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >45-54 </MKTypography>} />
                <FormControlLabel value="6" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >55-64</MKTypography>} />
                <FormControlLabel value="8" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >65 and above</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={age} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <MKTypography variant="h1" mb={3}>
                  Your heritage: Do you identify
                  with any of the following descents: Aboriginal,
                  Torres Strait Islander, Pacific Islander or
                  Maori descent?
                </MKTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleIsEthnicityChange}
                value={score.isEthnicity}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >No</MKTypography>} />
                <FormControlLabel value="2" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Yes</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={eth} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={3}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <MKTypography variant="h1" mb={3}>Birthplace: Where were you born?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleCountryChange}
                value={countryValue}
              >
                <FormControlLabel value="aus" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Australia</MKTypography>} />
                <FormControlLabel value="asi" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h2" >Asia (including the Indian sub-continent), Middle East, North Africa, Southern Europe</MKTypography>} />
                <FormControlLabel value="oth" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Other</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={country} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>

      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={4}>

        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h1" mb={3}>Family history of diabetes?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handlePareChange}
                value={score.pare}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >No</MKTypography>} />
                <FormControlLabel value="3" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Yes</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={fam} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>

      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={5}>

        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h1" mb={3}>Do you smoke?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleIsSmokeChange}
                value={score.isSmoke}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >No</MKTypography>} />
                <FormControlLabel value="2" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Yes</MKTypography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={smo} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>

      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={6}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h1" mb={3}>Daily intake of vegetables or fruit?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleIsVeChange}
                value={score.isVe}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Every day</MKTypography>} />
                <h1>Every day</h1>
                <FormControlLabel value="1" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} label={<MKTypography variant="h1" >Not every day</MKTypography>} />
                <h1>Not every day</h1>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={frui} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={7}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h2" mb={6}>What is your weekly physical activity level? (for example, 30 minutes a day on 5 or more days a week）?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleIsExerciseChange}
                value={score.isExercise}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>No</h1>
                <FormControlLabel value="2" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>Yes</h1>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={exer} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={8}>

        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h2" mb={6}>Ever had high blood glucose levels?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleHBGChange}
                value={score.high_blood_glucose}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>No</h1>
                <FormControlLabel value="6" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>Yes</h1>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={glu} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={9}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h2" mb={6}>Taking medication for hypertension?</MKTypography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleIsMedicationChange}
                value={score.isMedication}
              >
                <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>No</h1>
                <FormControlLabel value="2" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                <h1>Yes</h1>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={highp} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={10}>
        <Grid container >
          <Grid item xs={6} md={8}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"><MKTypography variant="h2" mb={6}>Do you know your waist size?</MKTypography></FormLabel>
              {(score.gender == -1 || score.country == -1 || score.isEthnicity == -1) ?
                <div><br />You have to chose your country and gender</div> :
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  onChange={handleWaisteChange}
                  value={score.waist}
                >
                  <FormControlLabel value="0" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                  <h1>{
                    score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "Less than 80 cm" : ("Less than 88 cm "))
                      : ((score.isEthnicity == 2 || score.country == 2) ? "Less than 90 cm " : ("Less than 102 cm  "))}</h1>
                  <FormControlLabel value="4" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                  <h1>{score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "80–90 cm" : ("88–100 cm "))
                    : ((score.isEthnicity == 2 || score.country == 2) ? "90–100 cm " : ("102–110 cm  "))}</h1>
                  <FormControlLabel value="7" control={<Radio
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                    '&, &.Mui-checked': {
                      color: 'blue',
                    },
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path':
                    {
                      stroke: 'blue',
                      strokeWidth: 5,
                    },
                  }} 
                  />} />
                  <h1>{score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "More than 90 cm" : ("More than 100 cm "))
                    : ((score.isEthnicity == 2 || score.country == 2) ? "More than 100 cm  " : ("More than 110 cm   "))}</h1>
                </RadioGroup>}
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={waist} alt="Image 1" style={{
              width: '100%',
              height: 'auto',
              border: '5px solid #654321',
              borderRadius: '20px',
            }} />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={11}>
        <Grid container >
          <Grid item
            xs={12}
            lg={12}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }} >
            <h1>
              <h1 >Result</h1>
              {(score.age != -1 && score.gender != -1 && score.isEthnicity != -1 && score.isMedication != -1 && score.country != -1 && score.isSmoke != -1
                && score.country != -1 && score.pare != -1 && score.waist != -1 && score.pare != -1 && score.high_blood_glucose != -1) ? ("Your Score is  ") + (score.age + score.country + score.gender + score.high_blood_glucose +
                  score.isEthnicity + score.isExercise + score.isMedication + score.isSmoke + score.isVe + score.pare + score.waist) : ("You have to fill the form before")}
            </h1>
          </Grid>
          <Grid item
            xs={12}
            lg={12}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }} >
            <CateTable score={(score.age + score.country + score.gender + score.high_blood_glucose +
              score.isEthnicity + score.isExercise + score.isMedication + score.isSmoke + score.isVe + score.pare + score.waist)} />
          </Grid>
          <Grid item
            xs={12}
            lg={12}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }} >
            <MKButton onClick={onClickToDetail} color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              Detail
            </MKButton>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={12}>
        <Grid container >
          <Grid item
            xs={4}
            lg={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }} >
            <h1>The detail of scores</h1>
            {(score.age != -1 && score.gender != -1 && score.isEthnicity != -1 && score.isMedication != -1 && score.country != -1 && score.isSmoke != -1
              && score.country != -1 && score.pare != -1 && score.waist != -1 && score.pare != -1 && score.high_blood_glucose != -1) ?
              < ScoreTable age={score.age} gender={score.gender}
                isEthnicity={score.isEthnicity} country={score.country}
                pare={score.pare} high_blood_glucose={score.high_blood_glucose}
                isMedication={score.isMedication} isSmoke={score.isSmoke}
                isVe={score.isVe} isExercise={score.isExercise}
                waist={score.waist}
              /> : <h1>Your have to fill the form before</h1>}
          </Grid>
          <Grid item
            xs={8}
            lg={8}
            justifyContent="left"
            alignItems="left"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }} >
            {score.age != -1 ? <VisImage age={score.age} /> : null}
            {score.age != -1 && score.waist != -1 && score.country != -1 && score.gender != -1 ? <VisImage2 age={score.age} gender={score.gender} country={score.country} waist={score.waist} /> : null}
          </Grid>
        </Grid>
      </CustomTabPanel>
    </MKBox >
  );
}


