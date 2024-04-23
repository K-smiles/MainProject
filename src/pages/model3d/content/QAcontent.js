

import MKBox from "components/MKBox";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <Typography>
                    {props.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}


function QAcontent() {
    const data = [{
        question: "question 1",
        answer: "answer 2"
    },
    {
        question: "question 2",
        answer: "answer 2"
    }]
    return <MKBox
        mx={-1}
        mt={-3}
    >
        {
            data.map(item =>{
                return <AccordionExpand question={item.question} answer={item.answer}/>
            })
        }
    </MKBox>
}

export default QAcontent;