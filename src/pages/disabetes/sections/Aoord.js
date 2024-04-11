import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MKTypography from "components/MKTypography";

import CateTable from './CateTable';


export default function AccordionUsage() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <MKTypography color='error'variant="h1" >More details</MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CateTable />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
