import { useStore } from "../state/store";
import Form from "react-bootstrap/Form";

const ShoppingList = () => {
  const shoppingItems = useStore((state) => state.shoppingItems);
  const sortedList = shoppingItems.map((item) => {
    const lower = item.toLowerCase();
    const capital = lower.charAt(0).toUpperCase() + lower.slice(1);
    return capital;
  });
  sortedList.sort();

  const shoppingListItems = sortedList.map((item) => (
    <li key={item} className="h4">
      <Form.Check type={"checkbox"} label={item} />
    </li>
  ));

  return <ul>{shoppingListItems}</ul>;
};

export default ShoppingList;
