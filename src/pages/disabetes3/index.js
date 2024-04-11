/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";

function Disabetes3() {
    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative
            />
            <Content />
            <MKBox pt={1} px={1} mt={0}>
                <SimpleFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Disabetes3;
