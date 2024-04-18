// Material Kit 2 React components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Content from "./sections/Content";

function DiabetesInAus() {
    return (
        <>
            <DefaultNavbar routes={routes}
                transparent
                relative
            />
            <Content />
            <SimpleFooter pt={1} px={1} mt={0} content={footerRoutes} />
        </>
    );
}

export default DiabetesInAus;
