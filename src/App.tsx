import { useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Filters from "./components/Filters";
import ProductListing from "./components/ProductListing";
import { useStore } from "./store/useStore";

function App() {
  const fetchProducts = useStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Store</h1>
      </header>
      <main>
        <Search />
        <Filters />
        <ProductListing />
      </main>
    </div>
  );
}

export default App;
