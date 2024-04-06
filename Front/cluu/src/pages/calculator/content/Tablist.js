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
import BoyIcon from '@mui/icons-material/Boy';
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
  };

  //Age change
  const handleAgeChange = (event) => {
    setScore({ ...score, age: Number(event.target.value) })
  };
  //isEthnicity change
  const handleIsEthnicityChange = (event) => {
    setScore({ ...score, isEthnicity: Number(event.target.value) })
  };
  //country change
  const handleCountryChange = (event) => {
    setScore({ ...score, country: Number(event.target.value) })
  };
  //country change
  const handlePareChange = (event) => {
    setScore({ ...score, pare: Number(event.target.value) })
  };
  // HGB change
  const handleHBGChange = (event) => {
    setScore({ ...score, high_blood_glucose: Number(event.target.value) })
  };
  // is medi
  const handleIsMedicationChange = (event) => {
    setScore({ ...score, isMedication: Number(event.target.value) })
  };
  // is smoke change
  const handleIsSmokeChange = (event) => {
    setScore({ ...score, isSmoke: Number(event.target.value) })
  };
  // is veg
  const handleIsVeChange = (event) => {
    setScore({ ...score, isVe: Number(event.target.value) })
  };
  // is exercise
  const handleIsExerciseChange = (event) => {
    setScore({ ...score, isExercise: Number(event.target.value) })
  };
  // is exercise
  const handleWaisteChange = (event) => {
    setScore({ ...score, waist: Number(event.target.value) })
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="1"  {...a11yProps(0)} />
          <Tab label="2"  {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
          <Tab label="6" {...a11yProps(5)} />
          <Tab label="7" {...a11yProps(6)} />
          <Tab label="8" {...a11yProps(7)} />
          <Tab label="9" {...a11yProps(8)} />
          <Tab label="10" {...a11yProps(9)} />
          <Tab label="Result" aria-label="phone" {...a11yProps(10)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleGenderChange}
            value={score.gender}
          >
            <FormControlLabel value="0" control={<Radio />} label="Female" />
            <FormControlLabel value="3" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Age</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleAgeChange}
            value={score.age}
          >
            <FormControlLabel value="0" control={<Radio />} label="Under 35 years" />
            <FormControlLabel value="2" control={<Radio />} label="35-44 years" />
            <FormControlLabel value="4" control={<Radio />} label="45-54 years" />
            <FormControlLabel value="6" control={<Radio />} label="55-64 years" />
            <FormControlLabel value="8" control={<Radio />} label="65 years or over" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Are you of Aboriginal, Torres Strait Islander, Pacific Islander or Maori descent?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleIsEthnicityChange}
            value={score.isEthnicity}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="2" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Where were you born?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleCountryChange}
            value={score.country}
          >
            {/* <FormControlLabel value="0" control={<Radio />} label="Australia " /> */}
            <FormControlLabel value="2" control={<Radio />} label="Asia (including the Indian sub-continent), Middle East, North Africa, Southern Europe" />
            <FormControlLabel value="0" control={<Radio />} label="Australia/Other" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={3}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Have either of your parents,
            or any of your brothers or sisters been diagnosed with diabetes (type 1 or type 2)?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handlePareChange}
            value={score.pare}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="3" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={4}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Have you ever been found to have high blood glucose (sugar) (for example, in a health examination, during an illness, during pregnancy)?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleHBGChange}
            value={score.high_blood_glucose}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="6" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={5}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Are you currently taking medication for high blood pressure?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleIsMedicationChange}
            value={score.isMedication}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="2" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={6}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Are you currently taking medication for high blood pressure?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleIsSmokeChange}
            value={score.isSmoke}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="2" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={7}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">How often do you eat vegetables or fruit?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleIsVeChange}
            value={score.isVe}
          >
            <FormControlLabel value="0" control={<Radio />} label="Every day" />
            <FormControlLabel value="1" control={<Radio />} label="Not every day" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={8}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">On average, would you say you do at least 2.5 hours of physical activity per week (for example, 30 minutes a day on 5 or more days a week)?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleIsExerciseChange}
            value={score.isExercise}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="2" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={9}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Your waist measurement taken below the ribs (usually at the level of the navel, and while standing)</FormLabel>
          <div>
            The correct place to measure your waist is halfway between your lowest rib and the top of your hipbone,
            roughly in line with your navel. Measure directly against your skin, breathe out normally,
            make sure the tape is snug, without compressing the skin. Make a note of your waist measurement and score as below.
          </div>
          {(score.gender == -1 || score.country == -1 || score.isEthnicity == -1) ?
            <div><br />You have to chose your country and gender</div> :
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleWaisteChange}
              value={score.waist}
            >
              <FormControlLabel value="0" control={<Radio />} label={
                score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "Less than 80 cm" : ("Less than 88 cm "))
                  : ((score.isEthnicity == 2 || score.country == 2) ? "Less than 90 cm " : ("Less than 102 cm  "))} />
              <FormControlLabel value="4" control={<Radio />} label={score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "80–90 cm" : ("88–100 cm "))
                : ((score.isEthnicity == 2 || score.country == 2) ? "90–100 cm " : ("102–110 cm  "))} />
              <FormControlLabel value="7" control={<Radio />} label={score.gender == 0 ? ((score.isEthnicity == 2 || score.country == 2) ? "More than 90 cm" : ("More than 100 cm "))
                : ((score.isEthnicity == 2 || score.country == 2) ? "More than 100 cm  " : ("More than 110 cm   "))} />
            </RadioGroup>}
        </FormControl>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={10}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Result</FormLabel>
          {(score.age != -1 && score.gender != -1 && score.isEthnicity != -1 && score.isMedication != -1 && score.country != -1 && score.isSmoke != -1
            && score.country != -1 && score.pare != -1 && score.waist != -1 && score.pare != -1 && score.high_blood_glucose != -1) ? ("Your Score is  ") + (score.age + score.country + score.gender + score.high_blood_glucose +
              score.isEthnicity + score.isExercise + score.isMedication + score.isSmoke + score.isVe + score.pare + score.waist) : ("You have to fill the form before")}
        </FormControl>
      </CustomTabPanel>
      <div>
        score.gender:{score.gender}<br />
        score.age: {score.age}<br />
        score.isEthnicity:{score.isEthnicity}<br />
        score.country:{score.country}<br />
        score.pare:{score.pare}<br />
        score.high_blood_glucose:{score.high_blood_glucose}<br />
        score.isMedication:{score.isMedication}<br />
        score.isSmoke:{score.isSmoke}<br />
        score.isVe:{score.isVe}<br />
        score.isExercise:{score.isExercise}<br />
      </div>
    </Box>
  );
}


