import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useParams } from 'react-router-dom';

function Content() {
    const { id } = useParams(); // 获取路由中的 "id" 参数
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >

            <MKBox p={4} mx={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    Clicking on different parts of the model to see how diabetes can harm your body at different stages.Please slide to the bottom for more Q&A sections.
                </MKTypography>
            </MKBox>

            <MKBox p={4} mx={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    Clicking on different parts of the model to see how diabetes can harm your body at different stages.Please slide to the bottom for more Q&A sections.
                </MKTypography>
            </MKBox>
        </MKBox>
    );
}

export default Content;
