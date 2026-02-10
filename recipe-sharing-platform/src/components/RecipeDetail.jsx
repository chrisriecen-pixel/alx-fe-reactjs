import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the specific recipe by ID
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-10">Loading recipe...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
        <p className="text-gray-600 mb-6 text-lg">{recipe.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <section className="bg-blue-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-blue-200">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ingredient 1 (Mock)</li>
              <li>Ingredient 2 (Mock)</li>
            </ul>
          </section>

          {/* Cooking Instructions Section */}
          <section className="bg-green-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-green-200">Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Step 1: Prep your space.</li>
              <li>Step 2: Follow the magic.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;