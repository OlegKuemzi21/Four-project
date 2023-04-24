import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfc";

interface ClothesState {
  favorites: string[];
}

const initialState: ClothesState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    addClothes(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const clothesActions = clothesSlice.actions;
export const clothesReduser = clothesSlice.reducer;
