import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Container, Grid, Typography } from "@mui/material";
import DGInput from 'components/DGInput'
import Select from 'components/DGSelect'
import MKButton from 'components/MKButton';
import Alert from '@mui/material/Alert';
// import ExerciseType from './exerciseType';
import ExercisePlan from './exercisePlan'



function Content() {
    const [gender, setGender] = React.useState('')
    const [age, setAge] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [isVisible, setIsVisible] = React.useState(false)

    const searchIndex = [
        {
            label: 'gender',
            labels: [
                { value: 'male', label: 'male' },
                { value: 'female', label: 'female' }],
            value: gender,
            updateValue: setGender
        },
        // {
        //     label: 'exercise option',
        //     labels: [
        //         { value: 1, label: 'Walking leisurely' },
        //         { value: 2, label: 'Walking for exercise' },
        //         { value: 3, label: 'Resistance (weight) training' },
        //         { value: 4, label: ' Swimming freestyle' },
        //         { value: 5, label: 'Golf' },
        //         { value: 6, label: 'Bicycling (moderate effort)' },
        //         { value: 7, label: 'Video Game' },


        //         { value: 8, label: 'Bicycling vigorous effort' },
        //         { value: 9, label: 'Swimming butterfly' },
        //         { value: 10, label: 'Dance class' },
        //         { value: 11, label: 'Running (10 min/km)' },
        //         { value: 12, label: 'Running (5.3 min/km)' },
        //     ],
        //     value: option,
        //     updateValue: setOption
        // },
    ]

    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5} >

            <MKBox p={4} mx={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    EXERCISE PLAN: According to WHO guidelines for older adults, let’s design a customized weekly workout plan for you to keep yourself healthy!.
                </MKTypography>
            </MKBox>

            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mt={{ xs: 1, sm: 2, md: 3 }}
                    mb={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Select label={searchIndex[0].label} labels={searchIndex[0].labels} value={searchIndex[0].value} updateValue={searchIndex[0].updateValue} />
                    </Grid>
                    <Grid item xs={5}>
                        <DGInput label="age/year" updateValue={setAge} />
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <DGInput label="Weight/kg" updateValue={setWeight} />
                    </Grid>
                    <Grid item xs={5}>
                        <DGInput label="Height/cm" updateValue={setHeight} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <MKButton variant='outlined' color="info"
                            component="span" onClick={() => {
                                setIsVisible(true)
                            }}><Typography variant='h2' color='blue'>
                                Get your calorie
                            </Typography></MKButton>
                    </Grid>
                </Grid>
            </MKBox>

            {isVisible && <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    {/* display calorie by attribute */}
                    <Grid item xs={12}>
                        <MKBox xs={12}>
                            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Alert variant="filled" severity="info">
                                        Your weekly calorie consumption :  <Typography variant='h1'>{7 * 1.2 * ((10 * weight + 6.25 * height - 5 * age) + (gender == 'female' ? -161 : 5))}</Typography>
                                    </Alert>
                                </Grid>
                                <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Alert variant="filled" severity="info">
                                        This is equivalent to : <Typography variant='h1'> {((7 * 1.2 * ((10 * weight + 6.25 * height - 5 * age) + (gender == 'female' ? -161 : 5))) / 300).toFixed(1)}</Typography>burgers
                                    </Alert>
                                </Grid>
                            </Container>

                        </MKBox>
                    </Grid>
                    {/* display calorie by exercise type */}
                    <Grid item xs={12}>
                        <MKBox >
                            {/* {
                                isVisible && <ExerciseType weight={weight} option={option} />
                            } */}
                        </MKBox>
                    </Grid>
                    {/*exercise plant*/}
                </Grid>
            </MKBox>}

            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" mb={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <ExercisePlan />
                    </Grid>
                </Grid>
            </MKBox>
        </MKBox>
    );
}

export default Content;
