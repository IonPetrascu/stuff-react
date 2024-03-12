import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      let newFavorites = state.favorites;
      const presentInFavorites = newFavorites.find(
        (el) => el.id === payload.id
      );
      if (presentInFavorites) {
        state.favorites = newFavorites.filter(
          (product) => product.id !== payload.id
        );
      } else {
        newFavorites.push(payload);
        state.favorites = newFavorites;
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
