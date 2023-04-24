import { configureStore } from "@reduxjs/toolkit";
import { clothesReduser } from "./clothes.slice";

export const store = configureStore({ reducer: { clothes: clothesReduser } });

export type RootState = ReturnType<typeof store.getState>;
