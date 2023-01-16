import * as React from 'react';

import { useEffect, useMemo, useState } from "react";
import Item from "./components/Item";
import "./style.css";

export default function App() {
  var defaultSports = [
    { name: "Table Tennis", category: "Indoor" },
    { name: "Football", category: "Outdoor" },
    { name: "Swimming", category: "Aquatics" },
    { name: "Chess", category: "Indoor" },
    { name: "BaseBall", category: "Outdoor" }
  ];
  
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Filter by Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
        </div>
      </div>
      <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
}
