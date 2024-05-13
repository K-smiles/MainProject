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
import MKButton from "components/MKButton";

import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import BackgroundBlogCard_new from "examples/Cards/BlogCards/BackgroundBlogCard_new";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard_new";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard_new";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard_new";

import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

//image
import picture1 from "assets/images/recipe/Question_mark.jpg";
import picture2 from "assets/images/recipe/Sweet_potato.jpg";
import picture3 from "assets/images/recipe/rice.jpg";
function Content() {
    const [name, setName] = React.useState('')
    const [category, setCategory] = React.useState('');
    const [subcategory, setSubCategory] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [imageLabel, setImageLabel] = React.useState('');

    const searchIndex = [
        {
            label: 'category',
            labels: [
                { value: '', label: 'null' },
                { value: 'Bakery products', label: 'Bakery products' },
                { value: 'Beverages', label: 'Beverages' },
                { value: 'Breads', label: 'Breads' },
                { value: 'Breakfast cereals', label: 'Breakfast cereals' },
                { value: 'Cereal Grains', label: 'Cereal Grains' },
                { value: 'Cookies', label: 'Cookies' },
                { value: 'Crackers', label: 'Crackers' },
                { value: 'Dairy products and alternatives', label: 'Dairy products and alternatives' },
                { value: 'Fruit and fruit products', label: 'Fruit and fruit products' },
                { value: 'Fruit juices', label: 'Fruit juices' },
                { value: 'Infant formula and weaning foods', label: 'Infant formula and weaning foods' },
                { value: 'Legumes and nuts', label: 'Legumes and nuts' },
                { value: 'Meal replacement & weight management products', label: 'Meal replacement & weight management products' },
                { value: 'Mixed meals and convenience foods', label: 'Mixed meals and convenience foods' },
                { value: 'Nutritional support products', label: 'Nutritional support products' },
                { value: 'Nuts', label: 'Nuts' },
                { value: 'Pasta and noodles', label: 'Pasta and noodles' },
                { value: 'Snack foods and confectionery', label: 'Snack foods and confectionery' },
                { value: 'Sports (energy) bars', label: 'Sports (energy) bars' },
                { value: 'Soups', label: 'Soups' },
                { value: 'Sugars and syrups', label: 'Sugars and syrups' },
                { value: 'Vegetables', label: 'Vegetables' },
                { value: 'Root vegetables', label: 'Root vegetables' },
                { value: 'Potato', label: 'Potato' },
                { value: 'African', label: 'African' },
                { value: 'Arabic and Turkish', label: 'Arabic and Turkish' },
                { value: 'Asian', label: 'Asian' },
                { value: 'Asian Indian', label: 'Asian Indian' },
                { value: 'Australian Aboriginal', label: 'Australian Aboriginal' },
                { value: 'Pacific Islanders', label: 'Pacific Islanders' },
                { value: 'Pima Indian', label: 'Pima Indian' },
                { value: 'South American', label: 'South American' },
                { value: 'West Indian/Caribbean', label: 'West Indian/Caribbean' }],

            value: category,
            updateValue: setCategory
        },
        {
            label: 'subcategory',
            labels: [
                { value: '', label: 'null' },
                { value: 'Cakes', label: 'Cakes' },
                { value: 'Desserts', label: 'Desserts' },
                { value: 'Muffins', label: 'Muffins' },
                { value: 'Pancakes', label: 'Pancakes' },
                { value: 'Coca Cola', label: 'Coca Cola' },
                { value: 'Rice milk drink', label: 'Rice milk drink' },
                { value: 'Smoothie, made from milk and fruit', label: 'Smoothie, made from milk and fruit' },
                { value: 'Smoothie, made from soy milk', label: 'Smoothie, made from soy milk' },
                { value: 'Sports drinks', label: 'Sports drinks' },
                { value: 'Drinks made from drinking mix powders', label: 'Drinks made from drinking mix powders' },
                { value: 'Milo (chocolate nutrient-fortified drink powder)', label: 'Milo (chocolate nutrient-fortified drink powder)' },
                { value: 'Quik (sweet drink powder)', label: 'Quik (sweet drink powder)' },
                { value: 'Baguette', label: 'Baguette' },
                { value: 'Coarse barley kernel bread, 80% kernels', label: 'Coarse barley kernel bread, 80% kernels' },
                { value: 'Barley flour breads', label: 'Barley flour breads' },
                { value: 'Buckwheat bread', label: 'Buckwheat bread' },
                { value: 'Chickpea flour bread', label: 'Chickpea flour bread' },
                { value: 'Fruit breads', label: 'Fruit breads' },
                { value: 'Gluten-free bread', label: 'Gluten-free bread' },
                { value: 'Hamburger/Hot dog buns', label: 'Hamburger/Hot dog buns' },
                { value: 'Oat bread', label: 'Oat bread' },
                { value: 'Oat bran bread', label: 'Oat bran bread' },
                { value: 'Rice bread', label: 'Rice bread' },
                { value: 'Rye bread', label: 'Rye bread' },
                { value: 'Rye kernel bread', label: 'Rye kernel bread' },
                { value: 'Specialty rye breads', label: 'Specialty rye breads' },
                { value: 'Wheat Breads', label: 'Wheat Breads' },
                { value: 'Spelt wheat breads', label: 'Spelt wheat breads' },
                { value: 'White wheat flour bread', label: 'White wheat flour bread' },
                { value: 'White wheat flour bread, toasted', label: 'White wheat flour bread, toasted' },
                { value: 'White wheat flour bread, frozen and defrosted', label: 'White wheat flour bread, frozen and defrosted' },
                { value: 'White wheat flour bread, frozen and defrosted, toasted', label: 'White wheat flour bread, frozen and defrosted, toasted' },
                { value: 'Wonder enriched white bread (Interstate Brands Companies, Kansas City, USA)', label: 'Wonder enriched white bread (Interstate Brands Companies, Kansas City, USA)' },
                { value: 'White bread with enzyme inhibitors', label: 'White bread with enzyme inhibitors' },
                { value: 'White bread with insoluble fiber', label: 'White bread with insoluble fiber' },
                { value: 'White bread with soluble fiber', label: 'White bread with soluble fiber' },
                { value: 'White bread enriched with Sunfibre (Cyamoposis tetragonolobus) (Indian cluster guar beans)', label: 'White bread enriched with Sunfibre (Cyamoposis tetragonolobus) (Indian cluster guar beans)' },
                { value: 'White bread consumed with fiber drink', label: 'White bread consumed with fiber drink' },
                { value: 'White bread with added ingredients', label: 'White bread with added ingredients' },
                { value: 'White bread, with different proving times and bread volumes', label: 'White bread, with different proving times and bread volumes' },
                { value: 'White resistant starch-enriched bread', label: 'White resistant starch-enriched bread' },
                { value: 'Wholemeal (whole wheat) wheat flour bread', label: 'Wholemeal (whole wheat) wheat flour bread' },
                { value: 'Wholemeal stoneground (whole wheat) wheat flour bread', label: 'Wholemeal stoneground (whole wheat) wheat flour bread' },
                { value: 'Specialty wheat breads', label: 'Specialty wheat breads' },
                { value: 'Burgen Mixed Grain bread (Tip Top Bakeries, Chatswood, Australia)', label: 'Burgen Mixed Grain bread (Tip Top Bakeries, Chatswood, Australia)' },
                { value: 'Unleavened Breads', label: 'Unleavened Breads' },
                { value: 'All-Bran', label: 'All-Bran (high-fiber, extruded wheat bran cereal)' },
                { value: 'Barley porridge', label: 'Barley porridge' },
                { value: 'Bran Flakes', label: 'Bran Flakes' },
                { value: 'Chocapic', label: 'Chocapic (Nestle, France)' },
                { value: 'Coco Pops', label: 'Coco Pops (cocoa flavored puffed rice)' },
                { value: 'Cornflakes', label: 'Cornflakes' },
                { value: 'Fruit and Fibre', label: 'Fruit and Fibre' },
                { value: 'Mini Wheats, whole wheat', label: 'Mini Wheats, whole wheat' },
                { value: 'Muesli', label: 'Muesli' },
                { value: 'Oat bran, consumed as a drink', label: 'Oat bran, consumed as a drink mixed with glucose and water' },
                { value: 'Porridge made from rolled oats', label: 'Porridge made from rolled oats' },
                { value: 'Instant Porridge', label: 'Instant Porridge' },
                { value: 'Rice Bubbles', label: 'Rice Bubbles' },
                { value: 'Special K', label: 'Special K - formulation varies in different countries' },
                { value: 'Wheat biscuits', label: 'Wheat biscuits (plain flaked wheat)' },
                { value: 'Wheat biscuits with additional ingredients', label: 'Wheat biscuits (flaked wheat) with additional ingredients' },
                { value: 'Breakfast cereals with milk', label: 'Breakfast cereals with milk' },
                { value: 'Hot oat cereal, prepared with skim milk', label: 'Hot oat cereal, prepared with 125 mL skim milk' },
                { value: 'Wheat biscuits consumed with skim milk', label: 'Wheat biscuits consumed with 125 mL skim milk' },
                { value: 'Breakfast cereal bars', label: 'Breakfast cereal bars' },
                { value: 'Barley', label: 'Barley' },
                { value: 'Corn/Maize', label: 'Corn/Maize' },
                { value: 'Sweet corn', label: 'Sweet corn' },
                { value: 'Couscous', label: 'Couscous' },
                { value: 'Millet', label: 'Millet' },
                { value: 'Rice, white', label: 'Rice, white' },
                { value: 'Rice, boiled white, type NS', label: 'Rice, boiled white, type NS' },
                { value: 'Long grain, boiled', label: 'Long grain, boiled' },
                { value: 'Rice, long grain, quick-cooking varieties', label: 'Rice, long grain, quick-cooking varieties' },
                { value: 'Rice porridge/Congee', label: 'Rice porridge/Congee' },
                { value: 'Rice, specialty rices', label: 'Rice, specialty rices' },
                { value: 'Jasmine rice, white', label: 'Jasmine rice, white' },
                { value: 'Rice, white low-amylose', label: 'Rice, white low-amylose' },
                { value: 'Rice, white high-amylose', label: 'Rice, white high-amylose Doongara, white (SunRice CleverRice brand, Rice Growers Co-Op., Australia)' },
                { value: 'Basmati, white, boiled', label: 'Basmati, white, boiled' },
                { value: 'Basmati, white, quick cooking', label: 'Basmati, white, quick cooking' },
                { value: 'Japonica/Koshihikari rice', label: 'Japonica/Koshihikari rice' },
                { value: 'Japonica rice enriched with Sunfibre', label: 'Japonica rice enriched with Sunfibre (Cyamoposis tetragonolobus) (soluble fiber)' },
                { value: 'Milled, white, high amylose rice', label: 'Milled, white, high amylose rice' },
                { value: 'Rice, brown', label: 'Rice, brown' },
                { value: 'Rice, brown, high-amlyose', label: 'Rice, brown, high-amlyose' },
                { value: 'Instant/puffed rice', label: 'Instant/puffed rice' },
                { value: 'Parboiled rice', label: 'Parboiled rice' },
                { value: 'Sticky rice', label: 'Sticky rice' },
                { value: 'Wheat, whole kernels', label: 'Wheat, whole kernels' },
                { value: 'Wheat, precooked kernels', label: 'Wheat, precooked kernels' },
                { value: 'Wheat, whole kernels', label: 'Wheat, whole kernels' },
                { value: 'Wheat, precooked kernels', label: 'Wheat, precooked kernels' },
                { value: 'Digestives', label: 'Digestives' },
                { value: 'LU P\'tit Dejeuner Miel et Pepites Chocolat', label: 'LU P\'tit Dejeuner Miel et Pepites Chocolat (LU, France)' },
                { value: 'LU Petit Dejeuner Chocolate & Cereals', label: 'LU Petit Dejeuner Chocolate & Cereals (LU, France)' },
                { value: 'LU Petit Dejeuner Coconut, nuts and chocolate', label: 'LU Petit Dejeuner Coconut, nuts and chocolate (LU, France)' },
                { value: 'LU Petit Dejeuner Fruits and Muesli', label: 'LU Petit Dejeuner Fruits and Muesli (LU France)' },
                { value: 'LU Petit Dejeuner Honey & Chocolate chips', label: 'LU Petit Dejeuner Honey & Chocolate chips (LU France)' },
                { value: 'LU Petit Dejeuner Milk and Cereals', label: 'LU Petit Dejeuner Milk and Cereals (LU France and LU Belgium)' },
                { value: 'Petiki Go! Fruits and Muesli', label: 'Petiki Go! Fruits and Muesli (LU Poland)' },
                { value: 'Puffed rice cakes', label: 'Puffed rice cakes' },
                { value: 'Water cracker', label: 'Water cracker' },
                { value: 'Custard', label: 'Custard' },
                { value: 'Creme Fraiche', label: 'Creme Fraiche' },
                { value: 'Fromage Frais', label: 'Fromage Frais' },
                { value: 'Ice cream, Regular/type NS', label: 'Ice cream, Regular/type NS' },
                { value: 'Ice cream, Reduced- or Low-fat', label: 'Ice cream, Reduced- or Low-fat' },
                { value: 'Ice cream, Premium (high-fat)', label: 'Ice cream, Premium (high-fat)' },
                { value: 'Milk, full-fat', label: 'Milk, full-fat' },
                { value: 'Milk, full-fat, flavored', label: 'Milk, full-fat, flavored' },
                { value: 'Milk, reduced-fat', label: 'Milk, reduced-fat' },
                { value: 'Milk, reduced- or low-fat, flavored', label: 'Milk, reduced- or low-fat, flavored' },
                { value: 'Rush flavored milk', label: 'Rush flavored milk (Parmalat Australia Ltd, South Brisbane, Australia)' },
                { value: 'Milk, skim/low-fat', label: 'Milk, skim/low-fat' },
                { value: 'Mousse, prepared', label: 'Mousse, prepared' },
                { value: 'Mousse, reduced-fat, prepared from commercial mousse mix with water', label: 'Mousse, reduced-fat, prepared from commercial mousse mix with water' },
                { value: 'Pudding, instant', label: 'Pudding, instant (White Wings, Australia)' },
                { value: 'Pudding, made from dairy and rice, Yoplait Le Rice', label: 'Pudding, made from dairy and rice, Yoplait Le Rice (National Foods Ltd, Australia)' },
                { value: 'Yoghurt', label: 'Yoghurt' },
                { value: 'Yoghurt, frozen, President\'s Choice Blue Menu brand', label: 'Yoghurt, frozen, President\'s Choice Blue Menu brand (Loblaw Brands Limited, Canada)' },
                { value: 'Low-fat yoghurt', label: 'Low-fat yoghurt' },
                { value: 'Vaalia, low-fat, sugar sweetened yoghurt', label: 'Vaalia, low-fat, sugar sweetened yoghurt (Pauls Ltd, Australia)' },
                { value: 'Natural yoghurt', label: 'Natural yoghurt' },
                { value: 'Non-fat yoghurt', label: 'Non-fat yoghurt' },
                { value: 'Diet Vaalia sweetened with acesulfame K and Splenda', label: 'Diet Vaalia sweetened with acesulfame K and Splenda' },
                { value: 'Ski non-fat, sugar sweetened', label: 'Ski non-fat, sugar sweetened' },
                { value: 'Yopliat non-fat, artificially sweetened yoghurts', label: 'Yopliat non-fat, artificially sweetened yoghurts (National Foods Ltd, Australia)' },
                { value: 'Probiotic yoghurt', label: 'Probiotic yoghurt' },
                { value: 'Reduced-fat yoghurt', label: 'Reduced-fat yoghurt' },
                { value: 'Yoghurt drinks', label: 'Yoghurt drinks' },
                { value: 'Soy-based dairy product alternatives', label: 'Soy-based dairy product alternatives' },
                { value: 'Soy milks', label: 'Soy milks' },
                { value: 'Soy milk drinks', label: 'Soy milk drinks' },
                { value: 'Soy yoghurt', label: 'Soy yoghurt' },
                { value: 'Apples, raw', label: 'Apples, raw' },
                { value: 'Apricots', label: 'Apricots' },
                { value: 'Apricots, dried', label: 'Apricots, dried' },
                { value: 'Apricot jam/fruit spread', label: 'Apricot jam/fruit spread' },
                { value: 'Banana, raw', label: 'Banana, raw' },
                { value: 'Breadfruit', label: 'Breadfruit (Artocarpus altilis)' },
                { value: 'Dates', label: 'Dates' },
                { value: 'Ginger', label: 'Ginger' },
                { value: 'Oranges, raw', label: 'Oranges, raw' },
                { value: 'Orange Marmalade', label: 'Orange Marmalade' },
                { value: 'Paw paw/papaya, raw', label: 'Paw paw/papaya, raw' },
                { value: 'Peaches', label: 'Peaches' },
                { value: 'Pears', label: 'Pears' },
                { value: 'Pineapple', label: 'Pineapple' },
                { value: 'Raisins', label: 'Raisins' },
                { value: 'Rockmelon/Cantaloupe', label: 'Rockmelon/Cantaloupe' },
                { value: 'Sultanas', label: 'Sultanas' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Apple juice', label: 'Apple juice' },
                { value: 'Cranberry juice', label: 'Cranberry juice' },
                { value: 'Orange juice', label: 'Orange juice' },
                { value: 'SuperJuice', label: 'SuperJuice (Berri Ltd, Australia)' },
                { value: 'Tomato juice', label: 'Tomato juice' },
                { value: 'Formula', label: 'Formula' },
                { value: 'Weaning Foods', label: 'Weaning Foods' },
                { value: 'Robinsons First Tastes from 4 months', label: 'Robinsons First Tastes from 4 months (Nutricia, Wells, UK)' },
                { value: 'Heinz for Baby from 4 months', label: 'Heinz for Baby from 4 months (Heinz Watties Ltd, Australia' },
                { value: 'Porridge/Gruel', label: 'Porridge/Gruel (Semper Foods AB, Sweden)' },
                { value: 'Baked Beans', label: 'Baked Beans' },
                { value: 'Beans, dried, boiled', label: 'Beans, dried, boiled' }],
            value: subcategory,
            updateValue: setSubCategory
        },
    ]
    const [page, setPage] = React.useState(1);
    const pageNumber = 5

    // Image upload handler
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result); // Set image data to state
                console.log("File read: ", e.target.result); // Optionally log it or handle it as needed
            };
            reader.readAsDataURL(file);
        }
    };


    // Function to send image data to the server and update the search field
    const handleDetection = async () => {
        if (image) {
            const id = uuidv4(); // Generate a unique ID for the request
            const imageData = image.split(',')[1]; // Extract Base64 data from the Data URL

            try {
                const response = await axios.post('http://3.25.107.27:5000/detect', {
                    id: id,
                    image: imageData
                });

                // Assuming the response contains an object with 'id' and 'image' as the label
                const detectedLabel = response.data.image;
                setImageLabel(detectedLabel);  // Update state for displaying the label
                setName(detectedLabel);        // Automatically set the detected label in the search field
            } catch (error) {
                console.error('Error posting image data:', error);
                setImageLabel('Failed to detect image');
            }
        } else {
            alert('No image uploaded!');
        }
    };
    const handleChange = (event, value) => {
        setPage(value, () => {

            //searchFood()
        });

    };
    let baseURL = "/foods";

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
            mx={2} mt={-5}
            padding="0 10%" >

            <MKBox p={4} mx={2} borderRadius="xl" shadow="lg">
                <MKTypography variant="h3" fontWeight="bold">
                    What foods are actually healthier for my body? I'm sure you've wondered this, so in this section you can just look up the GI values of specific foods.
                </MKTypography>
            </MKBox>

            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>

            <Grid container spacing={4}>  {/* 容器模式启用并设置间隙为4 */}
                <Grid item xs={12} md={4}>  {/* 每个卡片在小屏幕占满宽度，在中屏占三分之一 */}
                    <BackgroundBlogCard
                        image={picture1}
                        title="What is GI value?"
                        description="The GI value or glycaemic index is a measure of the effect of carbohydrates in food on blood glucose levels. Choosing low GI foods can help maintain stable blood glucose levels, which is especially important for managing metabolic conditions such as diabetes"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BackgroundBlogCard
                        image={picture2}
                        title="Medium GI foods (56 to 69):"
                        description="These foods raise blood glucose relatively quickly, and when the body frequently digests and absorbs medium GI foods, it regularly triggers a rapid rise in blood glucose levels with reduced insulin sensitivity, which is a key factor in triggering diabetes."

                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BackgroundBlogCard
                        image={picture3}
                        title="High GI foods (70 and above): "
                        description="These foods increase blood glucose levels rapidly, and long-term consumption of these foods can lead to increased oxidative stress in the body, which can increase the risk of being overweight and developing diabetes and its complications."

                    />
                </Grid>
            </Grid>


            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>


            <DefaultCounterCard

                title="Track food health levels"
                description="Here you can directly see the GI and GL levels of the food"
            />
            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>

            <MKBox mx={2} borderRadius="xl"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={10} mt={{ xs: 1, sm: 2, md: 3 }}>
                        <Autocomplete
                            id="free-solo-demo"
                            fullWidth
                            freeSolo
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
                            options={top100Films.map((option) => option.title)}
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
                    <Grid item xs={1} />
                    {searchIndex.map((item) => {
                        return (<Grid item xs={5}>
                            <Select label={item.label} labels={item.labels} value={item.value} updateValue={item.updateValue} />
                        </Grid>)
                    })}
                    <Grid item xs={1} />
                </Grid>
                <Grid style={{ marginBottom: '3%' }}>
                </Grid>
            </MKBox>



            <Grid container justifyContent="center" spacing={8}>

                <Grid item>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        id="file-input"
                        style={{ display: 'none' }}  // Hide the actual input
                    />
                    <label htmlFor="file-input">
                        <MKButton
                            variant="outlined"
                            color="info"
                            component="span"
                            sx={{
                                fontSize: '1rem',  // Larger font size
                                padding: '10px 24px'  // Adjust padding to fit larger text if needed
                            }}
                        >
                            Upload Image
                        </MKButton>
                    </label>
                </Grid>


                <Grid item>
                    <Button onClick={handleDetection} sx={{
                        fontSize: '1.3rem', // 更大的字体
                        padding: '10px 24px', // 增加内边距
                    }}>Detection</Button>
                </Grid>

            </Grid>



            <Button
                onClick={() => {
                    if (page !== 1) {
                        setPage(1);
                    } else {
                        searchFood();
                    }
                }}
                sx={{
                    fontSize: '1.8rem', // 更大的字体
                    padding: '10px 24px', // 增加内边距
                }}
            >search</Button>
            <Grid style={{ marginBottom: '3%' }}>
            </Grid>
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
                                <Grid container justifyContent="center" style={{ margin: '20px 0' }}>
                                    <Pagination count={10} page={page} onChange={handleChange} />
                                </Grid>
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