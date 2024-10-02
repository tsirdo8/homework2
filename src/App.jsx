import "./App.css";
import Text from "./components/text/Text";
import Button from "./components/button/Button";
import ProductCard from "./components/productcard/ProductCard";
import Header from "./components/header/Header";
import CustomInput from "./components/input/Input";

function App() {
  return (
    <div>
      <Header />
      <Text fontSize="24px" color="red" textAlign="center">
        Hello World!
      </Text>
      <Button
        backgroundColor="blue"
        width="200px"
        height="50px"
        text="Click Me!"
      />
      <ProductCard
        price={29.99}
        quantity={5}
        name="Product Name"
        description="This is a great product."
        color="lightgray"
      />
      <CustomInput />
    </div>
  );
}

export default App;
