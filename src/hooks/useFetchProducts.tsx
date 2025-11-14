import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Product } from "../store/useStore";

const API_URL = "https://fakestoreapi.com/products";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        const data = await response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
