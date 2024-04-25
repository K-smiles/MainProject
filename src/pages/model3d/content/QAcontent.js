import MKBox from "components/MKBox";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from "react-router-dom";
function AccordionExpand(props) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{props.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">
                    {props.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

function QAcontent() {
    const data = [{
        question: "Q1: What can l get this body model?",
        answer: " A:  This model allows you to: a. Understand the damage that diabetes causes to the human body b. Help you to check if you have similar symptoms"
    },
    {
        question: "Q2: I feel like I already have some early symptoms, what do I need to do?",
        answer: <Typography variant="body1">A: We recommend that you use&nbsp;
            <NavLink to="/map"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                replace
            >
                Hospitals and GPs
            </NavLink> to find a hospital or GP near you for a direct consultation.</Typography>
    },
    {
        question: "Q3: Can I be able to prevent diabetes effectively?",
        answer: "A: Tailor your personalised recipes and Customise your exercise programme will help you to create a personalised recipe and exercise programme, which will help you to prevent diabetes."
    },
    {
        question: " Q4:Can l use this model to track my health?",
        answer: " A: Although this model provides visual information about diabetes, we recommend that you haveregular consultations with a medical professional to accurately track your health."
    }
    ]
    return <MKBox
        mx={-1}
        mt={-3}
    >
        {
            data.map(item => {
                return <AccordionExpand question={item.question} answer={item.answer} />
            })
        }
    </MKBox>
}

export default QAcontent;