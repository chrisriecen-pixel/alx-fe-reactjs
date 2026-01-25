import { create } from 'zustand';

const getStoredRecipes = () => {
  const stored = localStorage.getItem('recipes');
  return stored ? JSON.parse(stored) : [];
};

export const useRecipeStore = create((set) => ({
  recipes: getStoredRecipes(),
  searchQuery: '',
  categoryFilter: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategoryFilter: (category) => set({ categoryFilter: category }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated };
    }),
}));
