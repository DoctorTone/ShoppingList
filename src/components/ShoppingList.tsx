import { useRef } from 'react';
import { useStore } from '../state/store';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormEvent } from 'react';

const ShoppingList = () => {
  const itemRef = useRef<HTMLInputElement | null>(null);
  const shoppingItems = useStore((state) => state.shoppingItems);
  // DEBUG
  console.log('Items === ', shoppingItems);
  const addItem = useStore((state) => state.addItem);
  const updateItem = useStore((state) => state.updateItem);
  const sortedList = shoppingItems.map((shoppingItem) => {
    const lower = shoppingItem.item.toLowerCase();
    const capital = lower.charAt(0).toUpperCase() + lower.slice(1);
    return {
      item: capital,
      required: shoppingItem.required,
    };
  });

  sortedList.sort((a, b) => {
    const nameA = a.item.toLowerCase();
    const nameB = b.item.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  // Ensure no duplicates
  const singleList = sortedList.filter((elem, index) => sortedList.indexOf(elem) === index);

  const tickItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    // DEBUG
    console.log('Ticked it', event.target.checked);
    updateItem(event.target.name, event.target.checked);
  };

  const shoppingListItems = singleList.map((elem) => (
    <>
      <Col xs={9}>
        <div key={elem.item} className="h4">
          <Form.Check
            type={'checkbox'}
            label={elem.item}
            name={elem.item}
            onChange={tickItem}
            checked={elem.required}
          />
        </div>
      </Col>
      <Col xs={2}>
        <input className="w-100" type="number" placeholder="1" />
      </Col>
      <Col xs={1}></Col>
    </>
  ));

  const updateList = (event: FormEvent) => {
    event.preventDefault();

    console.log('Item = ', itemRef.current?.value);
    addItem(itemRef.current!.value);
  };

  return (
    <>
      <Form onSubmit={updateList} className="mb-3">
        <Row>
          <Col xs={9}>
            <Form.Control ref={itemRef} name="item" type="text" />
          </Col>
          <Col xs={3}>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>{shoppingListItems}</Row>
    </>
  );
};

export default ShoppingList;
