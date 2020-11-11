import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$50.99" },
    { name: "Pdf reader", price: "$7.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
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
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
