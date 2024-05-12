
import React, { useState, useEffect } from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Drawer from 'components/Drawer';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';


export default function BasicSpeedDial({ routes }) {

    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const updateOpen = (value) => {
        setOpen(value);
    }

    const actions = [
        { icon: <Drawer routes={routes} open={open} updateOpen={updateOpen} />, name: 'Menu' },
        { icon: <IconButton color="info" children={<ArrowCircleUpIcon />} onClick={() => scrollToTop()} />, name: 'Go up' },
    ];

    return (<>

        {isVisible && <SpeedDial
            ariaLabel="SpeedDial to nav"
            sx={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
            }}
            icon={<WidgetsIcon />}
            FabProps={{ color: 'info' }}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name} />
            ))}
        </SpeedDial>}
    </>
    );
}
