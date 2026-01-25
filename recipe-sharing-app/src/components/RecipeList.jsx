import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

function RecipeList() {
  const { recipes, searchQuery, categoryFilter } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchQuery: state.searchQuery,
    categoryFilter: state.categoryFilter,
  }));

  const filtered = recipes.filter((r) =>
    `${r.title} ${r.description}`.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (categoryFilter === '' || r.category === categoryFilter)
  );

  return (
    <div>
      {filtered.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <p><strong>Category:</strong> {recipe.category}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
