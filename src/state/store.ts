import { create } from "zustand";

type ShoppingStoreState = {
  shoppingItems: string[];
};

export const useStore = create<ShoppingStoreState>()(() => ({
  shoppingItems: [
    "bread",
    "milk",
    "beer",
    "wine",
    "chips",
    "cobs",
    "tomatoes",
    "pizza",
    "garlic bread",
    "fish",
    "pasta",
    "pasta sauce",
    "curry sauce",
    "rice",
    "tea",
    "coffee",
    "pepsi",
    "chilli",
    "guacomole",
    "sour cream",
    "fajitas",
    "tortilla",
    "baguette",
    "cake",
    "potatoes",
    "chicken",
    "pie",
    "birthday card",
    "pork pie",
    "luncheon meat",
    "corned beef",
    "ham",
    "baked beans",
    "kidney beans",
  ],
}));
