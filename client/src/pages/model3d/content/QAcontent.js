import MKBox from "components/MKBox";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function AccordionExpand(props) {
    return (
        <Accordion>
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

const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const thStyle = { padding: '8px', border: '1px solid #ddd', backgroundColor: '#f4f4f4', textAlign: 'left' };
const tdStyle = { padding: '8px', border: '1px solid #ddd' };


const medicalTable = (
    <table style={tableStyle}>
        <thead>
            <tr>
                <th style={thStyle}>Condition</th>
                <th style={thStyle}>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={tdStyle} colSpan="2" className="category-header"><b>Eyes</b></td>
            </tr>
            <tr>
                <td style={tdStyle}>Blood accumulation</td>
                <td style={tdStyle}>Abnormal gathering of blood within the eye tissues.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Cataracts</td>
                <td style={tdStyle}>Clouding of the lens, leading to decreased vision.</td>
            </tr>
            <tr>
                <td style={tdStyle} colSpan="2" className="category-header"><b>Skin</b></td>
            </tr>
            <tr>
                <td style={tdStyle}>Increased dandruff</td>
                <td style={tdStyle}>A noticeable increase in scalp flakes, often accompanied by itching.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Eczema</td>
                <td style={tdStyle}>An inflammatory condition with red, itchy patches, sometimes oozing.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Skin blackening</td>
                <td style={tdStyle}>Increased pigmentation causing the skin to darken.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Erythema</td>
                <td style={tdStyle}>Noticeable red area on the skin due to dilated blood vessels.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Fungal infection</td>
                <td style={tdStyle}>Infection by fungi in the skin or other superficial tissues, with symptoms like redness and itch.</td>
            </tr>
            <tr>
                <td style={tdStyle} colSpan="2" className="category-header"><b>Stomach</b></td>
            </tr>
            <tr>
                <td style={tdStyle}>Gastric ulcer</td>
                <td style={tdStyle}>A sore on the stomach lining causing pain, bloating, and indigestion.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Chronic gastritis</td>
                <td style={tdStyle}>Long-lasting inflammation of the stomach lining, causing discomfort and altered digestion.</td>
            </tr>
            <tr>
                <td style={tdStyle} colSpan="2" className="category-header"><b>Feet</b></td>
            </tr>
            <tr>
                <td style={tdStyle}>Blisters</td>
                <td style={tdStyle}>Fluid-filled pockets on the skin.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Osteomyelitis</td>
                <td style={tdStyle}>Bone infection causing pain, swelling, and redness.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Ligament damage</td>
                <td style={tdStyle}>Injury to fibrous tissue connecting bones, causing pain and limited movement.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Tissue necrosis</td>
                <td style={tdStyle}>Death of body tissue from lack of blood supply or infection, leading to damage and loss.</td>
            </tr>
            <tr>
                <td style={tdStyle}>Amputation</td>
                <td style={tdStyle}>Surgical removal of a limb or part due to severe damage or disease.</td>
            </tr>
        </tbody>
    </table>
);



function QAcontent() {
    const data = [{
        question: "Q1: what useful information can I get?",
        answer: " A:  This model allows you to: a. Understand the damage that diabetes causes to the human body b. Help you to check if you have similar symptoms"
    },
    {
        question: "Q2: I feel like I already have some early symptoms, what do I need to do?",
        answer: <>
            <Typography variant="body1">A: We recommend that you use Hospitals and GPs to find a hospital or GP near you for a direct consultation.</Typography>
            <NavLink to="/map">
                <Button variant="contained" color="black">Hospitals and GPs</Button>
            </NavLink>
        </>
    },
    {
        question: "Q3: Can I be able to prevent diabetes effectively?",
        answer: "A: Tailor your personalised recipes and Customise your exercise programme will help you to create a personalised recipe and exercise programme, which will help you to prevent diabetes."
    },
    {
        question: " Q4:Can l use this model to track my health?",
        answer: " A: Although this model provides visual information about diabetes, we recommend that you haveregular consultations with a medical professional to accurately track your health."
    },
    {
        question: "Q5: Medical terminology explanation",
        answer: (
            <>
                {medicalTable}
            </>
        )
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