import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import RecipeCard from 'components/RecipeCard';
import axios from 'axios';
import Select from 'components/DGSelect'

function Content() {
    const [name, setName] = React.useState('')
    const [collections, setCollections] = React.useState('');
    const [cuisines, setCuisines] = React.useState('');

    const searchIndex1 = [
        {
            label: 'collections',
            labels: [
                { value: 'Steam', label: 'Steam' },
                { value: 'Lactose', label: 'Lactose' }],
            value: collections,
            updateValue: setCollections
        },
        {
            label: 'cuisines',
            labels: [
                { value: 'Austrian', label: 'Austrian' },
                { value: 'New Zealand', label: 'New Zealand' }],
            value: cuisines,
            updateValue: setCuisines
        },
    ]
    const [course, setCourse] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');

    const searchIndex2 = [
        {
            label: 'Course',
            labels: [
                { value: 'Frozen Desserts', label: 'Frozen Desserts' },
                { value: 'Lunch/Snacks', label: 'Lunch/Snacks' }],
            value: course,
            updateValue: setCourse
        },
        {
            label: 'Ingredients',
            labels: [
                { value: 'Acorns', label: 'Acorns' },
                { value: 'Almond', label: 'Almond' }],
            value: ingredients,
            updateValue: setIngredients
        },
    ]

    const [page, setPage] = React.useState(1);
    const pageNumber = 10

    const handleChange = (event, value) => {
        setPage(value);

    };
    let baseURL = "http://localhost:5000/recipes";

    const [data, setData] = React.useState([]);

    //load data
    React.useEffect(() => {
        searchFood()
    }, [page]);

    const searchFood = () => {
        let search = {name:name, collection: collections, cuisine: cuisines, course: course, ingredient:ingredients,page: page, pageNumber: pageNumber }
    
        axios({
            method: 'get',
            url: baseURL,
            params: search,
        }).then((response) => {
            setData(response.data)
        
        }, []);
    }

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
                    <Grid item xs={10} mt={{ xs: 1, sm: 2, md: 3 }} >
                        <Autocomplete
                            id="free-solo-demo"
                            fullWidth
                            freeSolo
                            value={name}
                            onChange={(event, newValue) => {
                                if (newValue)
                                    setName(newValue);
                                else
                                    setName('')
                            }}
                            inputValue={name}
                            onInputChange={(event, newInputValue) => {
                                if (newInputValue)
                                    setName(newInputValue);
                                else
                                    setName('')
                            }}
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} label="name" />}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    {searchIndex1.map((item) => {
                        return (<Grid item xs={5}>
                            <Select label={item.label} labels={item.labels} value={item.value} updateValue={item.updateValue} />
                        </Grid>)
                    })}
                    <Grid item xs={1} />

                    <Grid item xs={1} />
                    {searchIndex2.map((item) => {
                        return (<Grid item xs={5}>
                            <Select label={item.label} labels={item.labels} value={item.value} updateValue={item.updateValue} />
                        </Grid>)
                    })}
                    <Grid item xs={1} />
                </Grid>
            </MKBox>
            <Button onClick={() => {
                if (page != 1) {
                    setPage(1)
                } else {
                    searchFood()
                }

            }}>search</Button>
            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={12}>
                        <MKBox xs={12}>
                            <Stack spacing={2} mb={2}>
                                {data.map((item) => {
                                    return <RecipeCard data={item} />
                                })}
                                <Pagination count={10} page={page} onChange={handleChange} />
                            </Stack>
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>
        </MKBox>
    );
}

const top100Films = []

export default Content;
