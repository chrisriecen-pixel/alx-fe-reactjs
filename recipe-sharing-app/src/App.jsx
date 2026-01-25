import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './components/recipeStore';

function Home() {
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const setCategoryFilter = useRecipeStore((state) => state.setCategoryFilter);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
