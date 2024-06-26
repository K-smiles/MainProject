import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Button, Grid, Alert, Typography, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import RecipeCard from 'components/RecipeCard';
import axios from 'axios';
import Select from 'components/DGSelect'
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import BackgroundBlogCard_new from "examples/Cards/BlogCards/BackgroundBlogCard_new";
import picture1 from "assets/images/recipe/recipe_summary.jpg";


function Content() {
    const [name, setName] = React.useState('')
    const [collections, setCollections] = React.useState('');
    const [cuisines, setCuisines] = React.useState('');
    const [recipeName, setRecipeName] = React.useState([])
    const searchIndex1 = [
        {
            label: 'collections',
            labels: [
                { value: '', label: 'null' },
                { value: 'Easy', label: 'Easy' },
                { value: 'Greens', label: 'Greens' },
                { value: 'Less than 15 Mins', label: 'Less than 15 Mins' },
                { value: 'Spreads', label: 'Spreads' },
                { value: 'Microwave', label: 'Microwave' },
                { value: 'High Protein', label: 'High Protein' },
                { value: 'Inexpensive', label: 'Inexpensive' },
                { value: 'Poultry', label: 'Poultry' },
                { value: 'Low Cholesterol', label: 'Low Cholesterol' },
                { value: 'Beginner Cook', label: 'Beginner Cook' },
                { value: 'Less than 60 Mins', label: 'Less than 60 Mins' },
                { value: 'No Cook', label: 'No Cook' },
                { value: 'Vegan', label: 'Vegan' },
                { value: 'Roast', label: 'Roast' },
                { value: 'Sweet', label: 'Sweet' },
                { value: 'Steam', label: 'Steam' },
                { value: 'Broil/Grill', label: 'Broil/Grill' },
                { value: 'Kosher', label: 'Kosher' },
                { value: 'Very Low Carbs', label: 'Very Low Carbs' },
                { value: 'Cookie & Brownie', label: 'Cookie & Brownie' },
                { value: 'Freezer', label: 'Freezer' },
                { value: 'Christmas', label: 'Christmas' },
                { value: 'Penne', label: 'Penne' },
                { value: 'Lactose Free', label: 'Lactose Free' },
                { value: 'Kid Friendly', label: 'Kid Friendly' },
                { value: 'Healthy', label: 'Healthy' },
                { value: 'Camping', label: 'Camping' },
                { value: 'Oven', label: 'Oven' },
                { value: 'Weeknight', label: 'Weeknight' },
                { value: 'Stew', label: 'Stew' },
                { value: 'Egg Free', label: 'Egg Free' },
                { value: 'Thanksgiving', label: 'Thanksgiving' },
                { value: 'Stove Top', label: 'Stove Top' },
                { value: 'Low Protein', label: 'Low Protein' },
                { value: 'For Large Groups', label: 'For Large Groups' },
                { value: 'Fruit', label: 'Fruit' },
                { value: 'Small Appliance', label: 'Small Appliance' },
                { value: 'Stir Fry', label: 'Stir Fry' },
                { value: 'Spring', label: 'Spring' },
                { value: 'Less than 4 Hours', label: 'Less than 4 Hours' },
                { value: 'Summer', label: 'Summer' },
                { value: 'One Dish Meal', label: 'One Dish Meal' },
                { value: 'Potluck', label: 'Potluck' },
                { value: 'Less than 30 Mins', label: 'Less than 30 Mins' },
                { value: 'Vegetable', label: 'Vegetable' },
                { value: 'Refrigerator', label: 'Refrigerator' },
                { value: 'Winter', label: 'Winter' },
            ],
            value: collections,
            updateValue: setCollections
        },
        {
            label: 'cuisines',
            labels: [
                { value: '', label: 'All' },
                { value: 'Asian', label: 'Asian' },
                { value: 'Polish', label: 'Polish' },
                { value: 'Czech', label: 'Czech' },
                { value: 'Southwest Asia (middle East)', label: 'Southwest Asia (middle East)' },
                { value: 'Mexican', label: 'Mexican' },
                { value: 'German', label: 'German' },
                { value: 'Austrian', label: 'Austrian' },
                { value: 'European', label: 'European' },
                { value: 'Canadian', label: 'Canadian' },
                { value: 'Spanish', label: 'Spanish' },
                { value: 'Korean', label: 'Korean' },
                { value: 'African', label: 'African' },
                { value: 'Portuguese', label: 'Portuguese' },
                { value: 'Greek', label: 'Greek' },
                { value: 'Chinese', label: 'Chinese' },
                { value: 'Egyptian', label: 'Egyptian' },
                { value: 'Hungarian', label: 'Hungarian' },
            ],
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
                { value: '', label: 'All' },
                { value: 'Lunch/Snacks', label: 'Lunch/Snacks' },
                { value: 'Dessert', label: 'Dessert' },
                { value: 'Sauces', label: 'Sauces' },
                { value: 'Breakfast', label: 'Breakfast' },
                { value: 'Brunch', label: 'Brunch' },
            ],
            value: course,
            updateValue: setCourse
        },
        {
            label: 'Ingredients',
            labels: [
                { value: '', label: 'All' },
                { value: 'Chicken', label: 'Chicken' },
                { value: 'Duck', label: 'Duck' },
                { value: 'Grains', label: 'Grains' },
                { value: 'Spaghetti', label: 'Spaghetti' },
                { value: 'Lentil', label: 'Lentil' },
                { value: 'Spinach', label: 'Spinach' },
                { value: 'Nuts', label: 'Nuts' },
                { value: 'Veal', label: 'Veal' },
                { value: 'Pork', label: 'Pork' },
                { value: 'Cauliflower', label: 'Cauliflower' },
                { value: 'Corn', label: 'Corn' },
                { value: 'Trout', label: 'Trout' },
                { value: 'Beans', label: 'Beans' },
                { value: 'Rice', label: 'Rice' }],
            value: ingredients,
            updateValue: setIngredients
        },
    ]

    const [page, setPage] = React.useState(1);
    const pageNumber = 5

    const handleChange = (event, value) => {
        setPage(value);

    };

    let baseURL = process.env.REACT_APP_BASEURL + "/recipes";

    const [data, setData] = React.useState([]);

    //load data
    React.useEffect(() => {
        getAllData()
    }, []);

    //load data
    React.useEffect(() => {
        searchFood()
    }, [page]);

    const searchFood = () => {
        let search = { name: name, collection: collections, cuisine: cuisines, course: course, ingredient: ingredients, page: page, pageNumber: pageNumber }
        axios({
            method: 'get',
            url: baseURL,
            params: search,
        }).then((response) => {
            setData(response.data)
        }, []);
    }
    const getAllData = () => {

        axios({
            method: 'get',
            url: baseURL,
        }).then((response) => {
            setRecipeName(response.data)
        }, []);
    }

    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2} mt={-5}>
            <MKBox p={4} mx={2} mt={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    A healthy recipe routine is essential for you to prevent diabetes as it not only helps you to maintain a proper weight (BMI) but also effectively stabilises your blood sugar levels.
                </MKTypography>
                <BackgroundBlogCard_new
                    image={picture1}
                    title="Finding the suitable recipe for you"
                    description="Right here, We have shortlisted 200 different types of healthy meals for you along with their detailed preparation steps." />
            </MKBox>

            <MKBox mx={2} borderRadius="xl"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }} shadow="lg">
                <DefaultCounterCard title="Explore your recipe"
                    description="Here you can directly see the recipe" />
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Autocomplete
                            id="free-solo-demo"
                            fullWidth
                            freeSolo
                            value={name}
                            onChange={(event, newValue) => {
                                if (newValue) setName(newValue);
                                else setName('');
                            }}
                            inputValue={name}
                            onInputChange={(event, newInputValue) => {
                                if (newInputValue) setName(newInputValue);
                                else setName('');
                            }}
                            options={recipeName.map((option) => option)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="name"
                                    sx={{
                                        '& .MuiInputBase-input': { // 应用于输入字段
                                            fontWeight: 'bold', // 设置加粗
                                            fontSize: '1rem', // 设置字体大小
                                        },
                                        '& .MuiInputLabel-root': { // 应用于浮动标签
                                            fontWeight: 'bold', // 加粗
                                            fontSize: '1.2rem', // 字体大小
                                        }
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={1} />

                    {/* <Grid item xs={1} />
                    {searchIndex1.map((item) => {
                        return (<Grid item xs={5}>
                            <Select label={item.label} labels={item.labels} value={item.value} updateValue={item.updateValue} />
                        </Grid>)
                    })}
                    <Grid item xs={1} /> */}

                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Select label={searchIndex1[1].label} labels={searchIndex1[1].labels} value={searchIndex1[1].value} updateValue={searchIndex1[1].updateValue} />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={3}>
                        <IconButton sx={{
                            marginBottom: '3%', borderRadius: 1, borderColor: 'black',
                            bgcolor: 'background.paper',
                            m: 1,
                            border: 1,
                        }} color="info" children={<><SearchIcon /><Typography>Search</Typography></>} onClick={searchFood} />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </MKBox>

            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }} >
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={12}>
                        <MKBox xs={12}>
                            <Stack spacing={2} mb={2}>
                                {(data != [] && data.length != 0 ? <>
                                    <MKTypography variant="h3" fontWeight="bold">
                                        The result is below:
                                    </MKTypography>
                                    {data.map((item) => {
                                        return <RecipeCard data={item} />
                                    })} </> : null)}
                                <Grid container justifyContent="center">
                                    {(data != [] && data.length != 0) ?
                                        <Pagination count={10} page={page} onChange={handleChange} />
                                        : <MKBox mb={2}><Alert variant="outlined" severity="warning">
                                            No content or information matching your query keyWord <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
                                            suggestion:<br />
                                            Please check the input text for errors.<br />
                                            Please try a different query term.<br />
                                            Please use the more common term.<br />
                                        </Alert>
                                        </MKBox>}
                                </Grid>
                            </Stack>
                        </MKBox>
                    </Grid>
                </Grid>
            </MKBox>
        </MKBox>
    );
}

export default Content;
