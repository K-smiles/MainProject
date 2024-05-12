import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
export default function DGInput() {
    const handleChange = (event) => {

    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </FormControl>
        </Box>
    );
}
