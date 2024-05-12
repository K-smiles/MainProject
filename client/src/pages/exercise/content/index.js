import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";
import DGInput from 'components/DGInput'
import Select from 'components/DGSelect'
import { Button } from '@mui/material';

function Content() {
    const [gender, setGender] = React.useState('')
    const [age, setAge] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [frequency, setFrequency] = React.useState('')
    const [options, setOption] = React.useState('')
    const searchIndex = [
        {
            label: 'gender',
            labels: [
                { value: 'male', label: 'male' },
                { value: 'female', label: 'female' }],
            value: gender,
            updateValue: setGender
        },
        {
            label: 'option',
            labels: [
                { value: 'option1', label: 'option1' },
                { value: 'option2', label: 'option2' }],
            value: options,
            updateValue: setOption
        },
    ]

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
            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Select label={searchIndex[0].label} labels={searchIndex[0].labels} value={searchIndex[0].value} updateValue={searchIndex[0].updateValue} /></Grid>
                    <Grid item xs={5}>
                        <DGInput id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <DGInput id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={5}>
                        <DGInput id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <DGInput id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <DGInput id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </MKBox>
            <Button> Get your cal</Button>
            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={12}>
                        <MKBox xs={12}>
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>

        </MKBox>
    );
}

export default Content;
