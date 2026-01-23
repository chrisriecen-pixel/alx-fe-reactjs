const RecipeList = () => {
  const { recipes, searchQuery } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchQuery: state.searchQuery,
  }));

  const filtered = recipes.filter((r) =>
    `${r.title} ${r.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filtered.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
