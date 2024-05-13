import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FoodDialog({ data }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getColorForGI = (gi) => {
        if (gi > 70) return 'red';
        if (gi > 55) return 'orange';
        return 'green'; // GI < 55
    };

    const getColorForGL = (gl) => {
        if (gl > 20) return 'red';
        if (gl >= 10) return 'orange';
        return 'green'; // GL < 10
    };

    return (
        <>
            <Button size="large" color="primary" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    '& .MuiDialog-paper': {
                        maxWidth: '30%', 
                        width: '50%', 
                        height: '70%', 
                        margin: 'auto', 
                        transformOrigin: 'center center',
                        padding: '10px', 
                        [theme.breakpoints.down('sm')]: { 
                            maxWidth: '100%',
                            width: '100%',
                            height: '100%',
                        }
                    }
                }}
            >
                <DialogTitle sx={{ fontSize: '3rem', marginBottom: '20px' }}>{"Food Composition"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ fontSize: '1.7rem' }}>
                        GI_index: <Typography component="span" sx={{ fontSize: '4rem', color: getColorForGI(data['GI_index']) }}>{data['GI_index']}</Typography><br/>
                        GI_error_range: {data['GI_error_range']}<br/>
                        Carbohydrate: {data['Carbohydrate']}g<br/>
                        GL_index: <Typography component="span" sx={{ fontSize: '4rem', color: getColorForGL(data['GL_index']) }}>{data['GL_index']}</Typography><br/>
                        serving_size: {data['serving_size']}g
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ paddingTop: '20px' }}>
                    <Button onClick={handleClose} sx={{ fontSize: '3rem', color: 'secondary.main' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}