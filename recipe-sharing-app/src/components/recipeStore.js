import { create } from 'zustand';

const getStoredRecipes = () => {
  const stored = localStorage.getItem('recipes');
  return stored ? JSON.parse(stored) : [];
};

export const useRecipeStore = create((set) => ({
  recipes: getStoredRecipes(),
  searchTerm: '',
  filteredRecipes: getStoredRecipes(),

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
      return { recipes: updated, filteredRecipes: updated };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated, filteredRecipes: updated };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated, filteredRecipes: updated };
    }),
}));
