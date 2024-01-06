import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ShoppingItem = {
  item: string;
  required: boolean;
};

type ShoppingStoreState = {
  shoppingItems: ShoppingItem[];
  addItem: (item: string) => void;
  updateItem: (item: string, buyit: boolean) => void;
};

export const useStore = create<ShoppingStoreState>()(
  devtools(
    persist(
      (set) => ({
        shoppingItems: [
          { item: "bread", required: false },
          { item: "milk", required: false },
          { item: "beer", required: false },
          { item: "wine", required: false },
          { item: "chips", required: false },
          { item: "cobs", required: false },
          { item: "tomatoes", required: false },
          { item: "pizza", required: false },
          { item: "garlic bread", required: false },
          { item: "fish", required: false },
          { item: "pasta", required: false },
          { item: "pasta sauce", required: false },
          { item: "curry sauce", required: false },
          { item: "rice", required: false },
          { item: "tea", required: false },
          { item: "coffee", required: false },
          { item: "pepsi", required: false },
          { item: "chilli", required: false },
          { item: "guacomole", required: false },
          { item: "sour cream", required: false },
          { item: "fajitas", required: false },
          { item: "tortilla", required: false },
          { item: "baguette", required: false },
          { item: "cake", required: false },
          { item: "potatoes", required: false },
          { item: "chicken", required: false },
          { item: "pie", required: false },
          { item: "birthday card", required: false },
          { item: "pork pie", required: false },
          { item: "luncheon meat", required: false },
          { item: "corned beef", required: false },
          { item: "ham", required: false },
          { item: "baked beans", required: false },
          { item: "kidney beans", required: false },
          { item: "bananas", required: false },
          { item: "carrots", required: false },
          { item: "peas", required: false },
          { item: "biscuits", required: false },
          { item: "cucumber", required: false },
          { item: "lettuce", required: false },
          { item: "mushrooms", required: false },
          { item: "onion", required: false },
          { item: "water", required: false },
          { item: "crisps", required: false },
          { item: "pepper", required: false },
          { item: "salad", required: false },
          { item: "cheese", required: false },
          { item: "cream", required: false },
          { item: "trifles", required: false },
          { item: "yoghurt", required: false },
          { item: "cheesecake", required: false },
          { item: "eggs", required: false },
          { item: "margarine", required: false },
          { item: "soya milk", required: false },
          { item: "bacon", required: false },
          { item: "duck", required: false },
          { item: "mashed potato", required: false },
          { item: "mince", required: false },
          { item: "sausages", required: false },
          { item: "tuna", required: false },
          { item: "vinegar", required: false },
          { item: "salt", required: false },
          { item: "fish fingers", required: false },
          { item: "soup", required: false },
          { item: "soap", required: false },
          { item: "wash powder", required: false },
          { item: "washing up liquid", required: false },
          { item: "fabric conditioner", required: false },
          { item: "yorkshire pudding", required: false },
          { item: "notebook", required: false },
          { item: "porridge", required: false },
          { item: "spaghetti", required: false },
          { item: "chocolate", required: false },
          { item: "cider", required: false },
          { item: "lemonade", required: false },
          { item: "foil", required: false },
          { item: "bathroom cleaner", required: false },
          { item: "calgon", required: false },
        ],
        addItem: (name: string) =>
          set((state) => ({
            shoppingItems: [
              ...state.shoppingItems,
              { item: name, required: false },
            ],
          })),
        updateItem: (name: string, buyit: boolean) => {
          const lowerName = name.toLocaleLowerCase();
          set((state) => ({
            shoppingItems: state.shoppingItems.map((elem) => {
              if (elem.item === lowerName) {
                const newItem = {
                  item: lowerName,
                  required: buyit,
                };
                return newItem;
              }

              return elem;
            }),
          }));
        },
      }),
      { name: "shopStore_v0.1" }
    )
  )
);
