import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";
import NavContent from './sections/NavContent';

function Disabetes() {

    useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);
    // Defining functions to perform different types of scrolling.
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative
            />
            <NavContent/>
            <Content />
            <MKBox pt={1} px={1} mt={0}>
                <SimpleFooter content={footerRoutes} />
            </MKBox>
            <Fab style={{
                position: 'fixed',
                bottom: 16,
                right: 16,
            }} aria-label="sad" color='primary'
                onClick={scrollToTop}>
                <UpIcon />
            </Fab>
        </>
    );
}

export default Disabetes;
