import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
          { item: 'Bread', required: false },
          { item: 'Milk', required: false },
          { item: 'Beer', required: false },
          { item: 'Wine', required: false },
          { item: 'Chips', required: false },
          { item: 'Cobs', required: false },
          { item: 'Tomatoes', required: false },
          { item: 'Pizza', required: false },
          { item: 'Garlic bread', required: false },
          { item: 'Fish', required: false },
          { item: 'Pasta', required: false },
          { item: 'Pasta sauce', required: false },
          { item: 'Curry sauce', required: false },
          { item: 'Rice', required: false },
          { item: 'Tea', required: false },
          { item: 'Coffee', required: false },
          { item: 'Pepsi', required: false },
          { item: 'Chilli', required: false },
          { item: 'Guacomole', required: false },
          { item: 'Sour cream', required: false },
          { item: 'Fajitas', required: false },
          { item: 'Tortilla', required: false },
          { item: 'Baguette', required: false },
          { item: 'Cake', required: false },
          { item: 'Potatoes', required: false },
          { item: 'Chicken', required: false },
          { item: 'Pie', required: false },
          { item: 'Birthday card', required: false },
          { item: 'Pork pie', required: false },
          { item: 'Luncheon meat', required: false },
          { item: 'Corned beef', required: false },
          { item: 'Ham', required: false },
          { item: 'Baked beans', required: false },
          { item: 'Kidney beans', required: false },
          { item: 'Bananas', required: false },
          { item: 'Carrots', required: false },
          { item: 'Peas', required: false },
          { item: 'Biscuits', required: false },
          { item: 'Cucumber', required: false },
          { item: 'Lettuce', required: false },
          { item: 'Mushrooms', required: false },
          { item: 'Onion', required: false },
          { item: 'Water', required: false },
          { item: 'Crisps', required: false },
          { item: 'Pepper', required: false },
          { item: 'Salad', required: false },
          { item: 'Cheese', required: false },
          { item: 'Cream', required: false },
          { item: 'Trifles', required: false },
          { item: 'Yoghurt', required: false },
          { item: 'Cheesecake', required: false },
          { item: 'Eggs', required: false },
          { item: 'Margarine', required: false },
          { item: 'Soya milk', required: false },
          { item: 'Bacon', required: false },
          { item: 'Duck', required: false },
          { item: 'Mashed potato', required: false },
          { item: 'Mince', required: false },
          { item: 'Sausages', required: false },
          { item: 'Tuna', required: false },
          { item: 'Vinegar', required: false },
          { item: 'Salt', required: false },
          { item: 'Fish fingers', required: false },
          { item: 'Soup', required: false },
          { item: 'Soap', required: false },
          { item: 'Wash powder', required: false },
          { item: 'Washing up liquid', required: false },
          { item: 'Fabric conditioner', required: false },
          { item: 'Yorkshire pudding', required: false },
          { item: 'Notebook', required: false },
          { item: 'Porridge', required: false },
          { item: 'Spaghetti', required: false },
          { item: 'Chocolate', required: false },
          { item: 'Cider', required: false },
          { item: 'Lemonade', required: false },
          { item: 'Foil', required: false },
          { item: 'Bathroom cleaner', required: false },
          { item: 'Calgon', required: false },
        ],
        addItem: (name: string) => {
          const lowerName = name.toLowerCase();
          const capital = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
          set((state) => ({
            shoppingItems: [...state.shoppingItems, { item: capital, required: false }],
          }));
        },
        updateItem: (name: string, buyit: boolean) => {
          const lowerName = name.toLocaleLowerCase();
          const capital = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
          set((state) => ({
            shoppingItems: state.shoppingItems.map((elem) => {
              if (elem.item === capital) {
                const newItem = {
                  item: capital,
                  required: buyit,
                };
                return newItem;
              }

              return elem;
            }),
          }));
        },
      }),
      { name: 'shopStore_v0.10' },
    ),
  ),
);
