import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Grid, Typography, Alert, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import FoodCard from 'components/FoodCard';
import axios from 'axios';
import Select from 'components/DGSelect'
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import SearchIcon from '@mui/icons-material/Search';
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

//image
import picture1 from "assets/images/recipe/Question_mark.jpg";
import picture2 from "assets/images/recipe/Sweet_potato.jpg";
import picture3 from "assets/images/recipe/rice.jpg";
import FoodAI from './foodAI';

function Content() {
    const [name, setName] = React.useState('')
    const [giLevel, setGILevel] = React.useState('');

    const searchIndex = [
        {
            label: 'GI index level',
            labels: [
                { value: '', label: 'All' },
                { value: 'Low GI', label: 'Low GI' },
                { value: 'High GI', label: 'High GI' },
                { value: 'Medium GI', label: 'Medium GI' },
            ],
            value: giLevel,
            updateValue: setGILevel
        },

    ]
    const [page, setPage] = React.useState(1);
    const pageNumber = 5

    const handleChange = (event, value) => {
        setPage(value);
    };

    let baseURL = process.env.REACT_APP_BASEURL + "/foods";
    const [data, setData] = React.useState([]);
    const [nameSet, setNameSet] = React.useState([]);

    //load data
    React.useEffect(() => {
        axios({
            method: 'get',
            url: baseURL,
        }).then((response) => {
            setNameSet(response.data)
            console.log(response.data)
        }, []);
    }, []);

    //load data
    React.useEffect(() => {
        searchFood()
    }, [page]);

    const searchFood = () => {
        let search = { name: name, gi: giLevel, page: page, pageNumber: pageNumber }
        console.log(search)
        //mock axios to get data
        axios({
            method: 'get',
            url: baseURL,
            params: search,
        }).then((response) => {
            setData(response.data)
        }, []);
    }

    const searchByAI = (keyWord) => {
        let search = { name: keyWord, category: category, subcategory: subcategory, page: page, pageNumber: pageNumber }
        //mock axios to get data
        axios({
            method: 'get',
            url: baseURL,
            params: search,
        }).then((response) => {
            setData(response.data)
            console.log(response.data)
        }, []);
    }

    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2} mt={-5}>

            <MKBox p={4} mx={2} mt={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    What foods are actually healthier for my body? I'm sure you've wondered this, so in this section you can just look up the GI values of specific foods.
                </MKTypography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BackgroundBlogCard
                            image={picture1}
                            title="What are GI and GL values?"
                            description="Glycemic Index (GI) measures how quickly foods raise blood sugar levels. Glycemic Load (GL) expands on this by considering the amount of carbohydrates in a serving, providing a more practical assessment of food’s impact. While GI assesses speed, GL measures the actual effect on blood sugar. Choosing low GI and GL foods helps maintain stable glucose levels."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BackgroundBlogCard
                            image={picture2}
                            title="High, Medium, and Low GI Foods"

                            description={
                                <>
                                    <p>The Glycemic Index (GI) sorts carbohydrates on a scale from 0 to 100 by their effect on blood sugar. High GI foods (70 or higher) quickly raise blood sugar and insulin. Medium GI foods (56-69) result in moderate increases. Low GI foods (55 or lower) promote slow, stable changes in blood sugar and insulin levels.</p><br />

                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BackgroundBlogCard
                            image={picture3}
                            title="High, Medium, and Low GL Level "
                            description="Glycemic Load (GL) quantifies the blood sugar impact of a food portion, combining its carbohydrate content with its GI. High GL (20 or more) significantly raises blood sugar. Medium GL (11-19) moderately affects blood sugar levels. Low GL (10 or less) minimally influences blood sugar, supporting gradual, controlled changes, beneficial for glucose management." />
                    </Grid>
                </Grid>
            </MKBox>

            <MKBox mx={2} borderRadius="xl"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }} >
                <DefaultCounterCard
                    count="Direct search for food name"
                    title="Track food health levels"
                    description="Here you can directly see the GI and GL levels of the food" />
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center"
                    mb={2}>
                    <Grid item xs={1} />
                    <Grid item xs={10} mt={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Autocomplete
                            id="free-solo-demo"
                            fullWidth
                            freeSolo
                            aria-placeholder='sadasd'
                            value={name}
                            onChange={(event, newValue) => {
                                if (newValue)
                                    setName(newValue);
                                else
                                    setName('');
                            }}
                            inputValue={name}
                            onInputChange={(event, newInputValue) => {
                                if (newInputValue)
                                    setName(newInputValue);
                                else
                                    setName('');
                            }}
                            options={nameSet.map((option) => option.name)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={<> <Typography>Input the name of Food</Typography></>}
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

                    <Grid item xs={1} />
                    <Grid item xs={6} >
                        {searchIndex.map((item) => {
                            return (
                                <Select label={item.label} labels={item.labels} value={item.value} updateValue={item.updateValue} />
                            )
                        })}

                    </Grid>
                    <Grid item xs={4}>
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

            <MKBox mx={2} borderRadius="xl"
                mb={{ xs: 1, sm: 2, md: 3 }} shadow="lg" >
                <DefaultCounterCard
                    count="Image recognition"
                    description="By uploading a simple picture of a food you can find out its GI and GL values." />
                <FoodAI searchFunction={searchByAI} />
            </MKBox>

            <MKBox mx={2} borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
                padding="0 10%">
                <Stack spacing={2} mx={2}>
                    {(data != [] && data.length != 0 ? <>
                        <MKTypography variant="h3" fontWeight="bold">
                            The result is below:
                        </MKTypography>
                        {data.map((item) => {
                            return <FoodCard data={item} />
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

            <MKBox item xs={12} md={8} ml={{ xs: "auto", lg: 30 }} mr={{ xs: "auto", lg: 30 }}  >
                <FilledInfoCard
                    title="Diabetic Exercise"
                    description="you can explore your daily calorie.  This feature provides you with scientific plan and helps you to overcome diabete."
                    action={{
                        type: "internal",
                        route: "/exercise",
                        label: "Let's start"
                    }}
                />
            </MKBox>
        </MKBox>
    );
}

export default Content;
