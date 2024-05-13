import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
export default function DGInput({label,updateValue}) {
    const handleChange = (event) => {
        updateValue(event.target.value)
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <TextField id="outlined-basic" label={label} onChange={handleChange} variant="outlined" />
            </FormControl>
        </Box>
    );
}
