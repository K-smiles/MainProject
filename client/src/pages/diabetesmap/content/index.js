// Material Kit 2 React components
import MKBox from "components/MKBox";
import MapPanel from "./mappanel";
function Content() {
    return (

        <MKBox bgColor="white" borderRadius="xl"
            shadow="lg" display="flex" flexDirection="column" justifyContent="center"
            p={4}
            mx={2}
            mt={-5} >
            <MapPanel />
        </MKBox>
    );
}

export default Content;
