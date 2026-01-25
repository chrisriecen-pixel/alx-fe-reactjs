import { create } from 'zustand';

const getStoredRecipes = () => {
  const stored = localStorage.getItem('recipes');
  return stored ? JSON.parse(stored) : [];
};

export const useRecipeStore = create((set) => ({
  recipes: getStoredRecipes(),
  searchTerm: '',
  filteredRecipes: getStoredRecipes(),
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        `${recipe.title} ${recipe.description} ${recipe.ingredients || ''} ${recipe.prepTime || ''}`
          .toLowerCase()
          .includes(term.toLowerCase())
      ),
    }));
  },

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      localStorage.setItem('recipes', JSON.stringify(updated));
      return {
        recipes: updated,
        filteredRecipes: updated,
        recommendations: updated,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updated));
      return {
        recipes: updated,
        filteredRecipes: updated,
        favorites: state.favorites.filter((favId) => favId !== id),
        recommendations: updated,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      localStorage.setItem('recipes', JSON.stringify(updated));
      return {
        recipes: updated,
        filteredRecipes: updated,
        recommendations: updated,
      };
    }),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
