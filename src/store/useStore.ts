import { create } from "zustand";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "none";

type StoreState = {
  products: Product[];
  allProducts: Product[];
  loading: boolean;
  error: Error | null;
  searchQuery: string;
  selectedCategories: string[];
  priceRange: { min: number; max: number };
  sortBy: SortOption;
  fetchProducts: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCategories: (categories: string[]) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setSortBy: (sort: SortOption) => void;
  applyFilters: () => void;
};

const API_URL = "https://fakestoreapi.com/products";

export const useStore = create<StoreState>((set, get) => ({
  products: [],
  allProducts: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategories: [],
  priceRange: { min: 0, max: 1000 },
  sortBy: "none",

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      set({ allProducts: data, products: data, loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  setSelectedCategories: (categories: string[]) => {
    set({ selectedCategories: categories });
    get().applyFilters();
  },

  setPriceRange: (range: { min: number; max: number }) => {
    set({ priceRange: range });
    get().applyFilters();
  },

  setSortBy: (sort: SortOption) => {
    set({ sortBy: sort });
    get().applyFilters();
  },

  applyFilters: () => {
    const { allProducts, searchQuery, selectedCategories, priceRange, sortBy } =
      get();
    let filtered = [...allProducts];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    set({ products: filtered });
  },
}));
