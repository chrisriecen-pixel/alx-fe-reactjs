import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State management for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState(''); // Tracking validation status

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple front-end validation
    if (!title || !ingredients || !steps) {
      setErrors('All fields are required.');
      return;
    }

    // Checking if ingredients list includes at least two items
    if (ingredients.split(',').length < 2) {
      setErrors('Please include at least two ingredients (comma separated).');
      return;
    }

    // Success logic: Clear form and errors
    console.log("Recipe Submitted:", { title, ingredients, steps });
    setErrors('');
    setTitle('');
    setIngredients('');
    setSteps('');
    alert('Recipe added successfully!');
  };

  return (
    <div className="container mx-auto mt-10 p-4 max-w-md md:max-w-2xl shadow-xl rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      
      {/* Displaying validation errors */}
      {errors && <p className="text-red-500 mb-4 bg-red-50 p-2 rounded">{errors}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="e.g., Spicy Tacos"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients (comma separated)</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            rows="3"
            placeholder="e.g., Tortillas, Beef, Salsa"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea 
            value={steps} 
            onChange={(e) => setSteps(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
            rows="4"
            placeholder="Describe the steps..."
          />
        </div>
        
        {/* Responsive submit button */}
        <button 
          type="submit" 
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;