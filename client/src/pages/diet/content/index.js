import * as React from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import FoodCard from 'components/FoodCard';
import axios from 'axios';
import Select from 'components/DGSelect'

function Content() {
    const [name, setName] = React.useState('')
    const [category, setCategory] = React.useState('');
    const [subcategory, setSubCategory] = React.useState('');

    const searchIndex = [
        {
            label: 'category',
            labels: [
                { value: 'Dairy products and alternatives', label: 'Dairy products and alternatives' },
                { value: 'Breads', label: 'Breads' }],
            value: category,
            updateValue: setCategory
        },
        {
            label: 'subcategory',
            labels: [
                { value: 'Reduced-fat yoghurt', label: 'Reduced-fat yoghurt' },
                { value: 'Burgen Mixed Grain bread (Tip Top Bakeries, Chatswood, Australia)', label: 'Burgen Mixed Grain bread (Tip Top Bakeries, Chatswood, Australia)' }],
            value: subcategory,
            updateValue: setSubCategory
        },
    ]
    const [page, setPage] = React.useState(1);
    const pageNumber = 10

    const handleChange = (event, value) => {
        setPage(value, () => {

            //searchFood()
        });

    };
    let baseURL = "http://localhost:5000/foods";

    const [data, setData] = React.useState([]);

    //load data
    React.useEffect(() => {
        searchFood()
    }, [page]);

    const searchFood = () => {
        let search = { name: name, category: category, subcategory: subcategory, page: page, pageNumber: pageNumber }
        console.log("page")
        //mock axios to get data
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
                    {searchIndex.map((item) => {
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
                                    return <FoodCard data={item} />
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
