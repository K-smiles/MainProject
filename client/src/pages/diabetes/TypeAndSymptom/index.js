import React, { useState, useEffect, useRef } from 'react';

// Material Kit 2 React components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import MKButton from "components/MKButton";
import SpeedDial from 'components/SpeedDial/index.js';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";
import NavContent from './sections/NavContent';

function TypeAndSymptom() {
    const [isVisible, setIsVisible] = useState(false);
    // 显示按钮的逻辑
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

    // 滚动到顶部的方法
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <DefaultNavbar routes={routes} transparent relative />
            <NavContent />
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
            <SpeedDial routes={routes} />
        </>
    );
}

export default TypeAndSymptom;
