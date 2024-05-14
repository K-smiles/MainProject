import React, { useState, useEffect, useRef } from 'react';

// Material Kit 2 React components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./content/Content";

import NavContent from './content/NavContent';

function ExercisePage() {
    return (
        <>
            <DefaultNavbar routes={routes} transparent relative />
            <NavContent />
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
        </>
    );
}

export default ExercisePage;
