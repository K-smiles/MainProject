import express from 'express';

import RecipeMessage from '../models/recipeMessage.js';
import path from 'path'
import fs from 'fs'
import axios from 'axios';
const router = express.Router();

export const getRecipes = async (req, res) => {
    try {

        let keywords = ""
        if (req.query['collection'] != undefined && req.query['collection'] != '') {
            keywords += req.query['collection']
            keywords += "|"
        }
        if (req.query['course'] != undefined && req.query['course'] != '') {
            keywords += req.query['course']
            keywords += "|"
        }
        if (req.query['cuisine'] != undefined && req.query['cuisine'] != '') {
            keywords += req.query['cuisine']
            keywords += "|"
        }

        let search = {
        }
        if (keywords != '') {
            keywords = keywords.slice(0, -1);
            let tmp = {}
            tmp['$regex'] = keywords
            tmp['$options'] = 'i'
            search['Keywords'] = tmp
        }
        if (req.query['name'] != undefined && req.query['name'] != '') {
            let tmpName = {}
            tmpName['$regex'] = req.query['name']
            tmpName['$options'] = 'i'
            search['Name'] = tmpName
        }
        if (req.query['ingredient'] != undefined && req.query['ingredient'] != '') {
            let tmpIngredient = {}
            tmpIngredient['$regex'] = req.query['ingredient']
            tmpIngredient['$options'] = 'i'
            search['RecipeIngredientParts'] = tmpIngredient
        }
        console.log(keywords)
        console.log(search)
        const RecipeMessages = await RecipeMessage.find(search)
            .skip((req.query['page'] - 1) * req.query['pageNumber']).limit(req.query['pageNumber']);
        res.status(200).json(RecipeMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await RecipeMessage.findOne({
            "RecipeId": parseInt(id)
        })
        res.status(200).json(recipe);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getKeyWord = async (req, res) => {
    const id = "12a3b456-c789-0d1e-2f3a-4567890bcdef"; // Generate a unique ID for the request
    // Assuming the image file is named 'a.png' in the 'uploads' directory
    const imagePath = path.join('client/src/assets/images/recipe/rice.jpg');
    try {
        // Read the image file synchronously
        const imageData = await fs.promises.readFile(imagePath, { encoding: 'base64' });
        const response = await axios.post('http://3.25.107.27:5000/detect', {
            id: id,
            image: imageData
        });
        // Assuming the response contains an object with 'id' and 'image' as the label
        const detectedLabel = response.data.image;
        
        console.log(detectedLabel)
        res.status(200).json(detectedLabel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;