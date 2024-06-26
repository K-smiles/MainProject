import express from 'express';

import RecipeMessage from '../models/recipeMessage.js';

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
        if (req.query['pageNumber'] != undefined && req.query['pageNumber'] != '') {
            const RecipeMessages = await RecipeMessage.find(search)
                .skip((req.query['page'] - 1) * req.query['pageNumber']).limit(req.query['pageNumber']);
            res.status(200).json(RecipeMessages);
        } else {
            const RecipeMessages = await RecipeMessage.find(search);
            const RecipeNames = RecipeMessages.map(recipe => recipe.Name);
            res.status(200).json(RecipeNames);
        }

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

export default router;