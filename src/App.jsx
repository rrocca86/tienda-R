import "./App.css";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"} />
        <Footer />
      </div>
    </>
  );
}

export default App;
