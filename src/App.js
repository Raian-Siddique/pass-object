import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [{ name: "Photoshop", price: "$90.99" }];
  return (
    <div className="App">
      <header className="App-header">
        <Product name={products[0].name}></Product>
        <Product></Product>
        <Product></Product>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid light-salmon",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "5px",
    padding: "10px",
  };
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
