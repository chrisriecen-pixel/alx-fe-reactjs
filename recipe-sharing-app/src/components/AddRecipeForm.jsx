import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description, category });
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
