import ShoppingList from "./components/ShoppingList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container>
        <div>
          <h1 className="mt-4 mb-4">Shopping List</h1>
        </div>
        <ShoppingList />
      </Container>
    </>
  );
}

export default App;
