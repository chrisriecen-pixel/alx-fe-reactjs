import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      description,
      category,
      ingredients,
      prepTime,
    });
    setTitle('');
    setDescription('');
    setCategory('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" />
      <input value={prepTime} onChange={(e) => setPrepTime(e.target.value)} placeholder="Prep Time" />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
