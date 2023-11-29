import { useStore } from "../state/store";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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

  const addItem = () => {};

  return (
    <>
      <Form onSubmit={addItem} className="mb-3">
        <Row>
          <Col xs={6}>
            <Form.Control type="text" />
          </Col>
          <Col xs={4}>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <ul>{shoppingListItems}</ul>
      </Row>
    </>
  );
};

export default ShoppingList;
