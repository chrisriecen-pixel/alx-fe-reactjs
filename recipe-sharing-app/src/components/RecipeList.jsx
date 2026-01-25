import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import FavoriteToggleButton from './FavoriteToggleButton';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          {recipe.category && <p><strong>Category:</strong> {recipe.category}</p>}
          {recipe.ingredients && <p><strong>Ingredients:</strong> {recipe.ingredients}</p>}
          {recipe.prepTime && <p><strong>Prep Time:</strong> {recipe.prepTime}</p>}
          <FavoriteToggleButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
