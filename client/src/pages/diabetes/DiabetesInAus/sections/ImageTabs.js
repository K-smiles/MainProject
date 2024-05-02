import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import BarChartIcon from '@mui/icons-material/BarChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VisImage from './VisImage'
import VisImage2 from './VisImage2'
import VisImage3 from './VisImage3'
import VisImage4 from './VisImage4'

function TabPanel(props) {
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function ImageTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab icon={<BarChartIcon />} label="Age Influence" {...a11yProps(0)} />
                    <Tab icon={<StackedBarChartIcon />} label="BMI Influence" {...a11yProps(1)} />
                    <Tab icon={<LineAxisIcon />} label="Incidence by Age" {...a11yProps(2)} />
                    <Tab icon={<GraphicEqIcon />} label="Incidence by Year" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <VisImage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <VisImage2/>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <VisImage3/>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <VisImage4/>
            </TabPanel>
        </Box>
    );
}
