import express from 'express';

import { getRecipe,getRecipes } from '../controllers/recipes.js';
const recipeRouter = express.Router();

recipeRouter.get('/', getRecipes);
recipeRouter.get('/:id', getRecipe);
export default recipeRouter;