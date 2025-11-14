# Fake Store - Product Listing Application

A modern React-TypeScript application that provides an interactive product browsing experience with advanced filtering, searching, and sorting capabilities.

## 📋 Problem Statement

Build a product listing application that allows users to:

- Browse products from an external API (FakeStore API)
- Search products by name
- Filter products by category
- Filter products by price range
- Sort products by price or name (ascending/descending)
- View a responsive product grid with loading states
- Handle error states gracefully

## ✨ Features

- **Product Search**: Real-time search functionality to find products by title
- **Category Filtering**: Filter products by their categories
- **Price Range Filtering**: Set minimum and maximum price constraints
- **Multiple Sort Options**: Sort by price or name in ascending/descending order
- **Loading States**: Skeleton screens while data is being fetched
- **Empty States**: User-friendly messages when no products match the criteria
- **State Management**: Centralized state management using Zustand
- **TypeScript**: Fully typed for better developer experience and code quality

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 4.9.5** - Type-safe JavaScript
- **Zustand 5.0.8** - Lightweight state management
- **Axios 1.13.2** - HTTP client for API requests
- **React Scripts 5.0.1** - Build tooling
- **FakeStore API** - External product data source

## 📁 Project Structure

```
src/
├── components/
│   ├── EmptyList/        # Component for empty state
│   ├── Filters/          # Filtering options (category, price, sort)
│   ├── ProductListing/   # Product grid display
│   ├── Search/           # Search bar component
│   └── Skelleton/        # Loading skeleton component
├── hooks/
│   └── useFetchProducts.tsx  # Custom hook for fetching products
├── store/
│   └── useStore.ts       # Zustand store with state management
├── App.tsx               # Main application component
└── index.tsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 Key Implementation Details

### State Management (Zustand)

The application uses Zustand for centralized state management with the following state:

- `products` - Currently filtered/sorted products
- `allProducts` - Original product list from API
- `loading` - Loading state indicator
- `error` - Error handling
- `searchQuery` - Current search term
- `selectedCategories` - Active category filters
- `priceRange` - Min/max price constraints
- `sortBy` - Current sort option

### API Integration

Products are fetched from the FakeStore API:

```
https://fakestoreapi.com/products
```

### Filter Logic

Filters are applied in the following order:

1. Search query (by title)
2. Category filter
3. Price range filter
4. Sort option

## 🎨 Components Overview

- **Search**: Provides search input for filtering products by name
- **Filters**: Contains category selection, price range slider, and sort options
- **ProductListing**: Displays products in a responsive grid layout
- **EmptyList**: Shows when no products match the current filters
- **Skelleton**: Loading placeholder during data fetch

## 🔧 Future Enhancements

- [ ] Add pagination or infinite scroll
- [ ] Implement product detail view
- [ ] Add shopping cart functionality
- [ ] Include user authentication
- [ ] Add product comparison feature
- [ ] Implement wishlist functionality
- [ ] Add unit and integration tests
- [ ] Optimize performance with React.memo and useMemo

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Note**: This is a practice project using the FakeStore API for educational purposes.
