import { useRecipeStore } from './components/recipeStore';

function App() {
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}


export default App;
