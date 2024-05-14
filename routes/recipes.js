import express from 'express';

import { getRecipe,getRecipes,getKeyWord } from '../controllers/recipes.js';
const recipeRouter = express.Router();

recipeRouter.get('/', getRecipes);
// recipeRouter.get('/:id', getRecipe);
recipeRouter.get('/test', getKeyWord);
export default recipeRouter;