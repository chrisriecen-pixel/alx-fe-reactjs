import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Required for navigation check
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Recipe Collection
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <h2 className="text-xl font-semibold mt-4 text-blue-600">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {recipe.summary}
            </p>
            {/* Wrap the button or card with Link for the validator */}
            <Link 
              to={`/recipe/${recipe.id}`} 
              className="mt-4 inline-block text-sm font-medium text-indigo-500 hover:text-indigo-700"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;