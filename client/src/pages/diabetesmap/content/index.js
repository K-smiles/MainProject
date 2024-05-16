// Material Kit 2 React components
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import MapPanel from "./mappanel";

function Content() {
    return (

        <MKBox bgColor="white" borderRadius="xl"
            shadow="lg" display="flex" flexDirection="column" justifyContent="center"
            p={4}
            mx={2}
            mt={-5} >
            <MapPanel />
            <MKBox item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                <FilledInfoCard
                    title="Diabetic Diet"
                    description="you can explore how different kinds of recipes and food.  This feature helps you figure out which food damage your body and provide your with recipes' info."
                    action={{
                        type: "internal",
                        route: "/diet",
                        label: "Let's start"
                    }}
                />
            </MKBox>
        </MKBox>
    );
}

export default Content;
