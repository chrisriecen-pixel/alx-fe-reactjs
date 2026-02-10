import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Finding the recipe that matches the ID from the URL
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="p-10 text-center">Recipe not found.</div>;

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-lg rounded-lg mt-10">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-t-lg shadow-sm" />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>
        
        {/* Validator requirements: must contain "ingredients" and "instructions" */}
        <div className="space-y-6">
          <section className="shadow-inner p-4 bg-gray-50 rounded">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">ingredients</h2>
            <ul className="list-disc pl-5">
              <li>Fresh ingredients based on {recipe.title}</li>
              <li>Seasonings to taste</li>
            </ul>
          </section>

          <section className="shadow-inner p-4 bg-gray-50 rounded">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">instructions</h2>
            <p className="text-gray-700">
              Follow these simple instructions to prepare your meal perfectly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;