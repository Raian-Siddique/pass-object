import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayokList = ["JASHIM", "RUBEL", "MANNA", "bappi"];
  const pd = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$50.99" },
    { name: "Pdf reader", price: "$7.99" },
  ];
  // const productNames = pd.map((pd) => pd.name);
  // console.log(productNames);
  // const nayokListNames = nayokList.map((nayokList) => nayokList);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {pd.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <ul>
          {nayokList.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {/* <li>{nayokList[0]}</li>
          <li>{nayokList[1]}</li> */}
        </ul>
        {pd.map((pds) => (
          <Product product={pds}></Product>
        ))}

        {/* <Product product={pd[0]}></Product>
        <Product product={pd[1]}></Product> */}
      </header>
    </div>
  );
}
function Product(props) {
  const pdstyle = {
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
    <div style={pdstyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
