import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const App = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;

    result = filterSearchTitle(result);
    result = sortDate(result);
    setFiltredProducts(result);
  }, [products, sort, searchValue]);

  // * Sort & Search Handlers

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    const value = e.target.value.trim().toLowerCase();
    const filtredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    setFiltredProducts(filtredProducts);
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
    let sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (e.target.value === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (e.target.value === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
    setFiltredProducts(sortedProducts);
  };
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  // *End oF Handlers
  console.log(products, "im products App");
  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category
            categoryList={categoryList}
            setCategoryList={setCategoryList}
          />
          <Products categoryList={categoryList} setProducts={setProducts} />
          <Filter
            sort={sort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <ProductList
            products={filtredProducts}
            categories={categoryList}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
