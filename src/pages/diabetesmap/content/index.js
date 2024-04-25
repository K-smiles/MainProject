// Material Kit 2 React components
import MKBox from "components/MKBox";
import MapPanel from "./mappanel";
function Content() {
    return (
        <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mx={3}
        >
            <MapPanel />
        </MKBox>

    );
}

export default Content;
