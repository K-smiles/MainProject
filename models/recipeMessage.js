import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    RecipeId: Number,
    Name: String,
    Images: String,
    AuthorId: String,
    CookTime: String,
    PrepTime: String,
    TotalTime: String,
    RecipeCategory: String,
    Keywords: [String],
    RecipeIngredientParts: [String],
    AggregatedRating: String,
    ReviewCount: String,

    Calories: String,
    FatContent: String,
    SaturatedFatContent: String,
    CholesterolContent: String,
    SodiumContent: String,
    CarbohydrateContent: String,

    FiberContent: String,
    SugarContent: String,
    ProteinContent: String,
    RecipeInstructions: [String],
})

var RecipeMessage = mongoose.model('recipeMessage', recipeSchema);

export default RecipeMessage;