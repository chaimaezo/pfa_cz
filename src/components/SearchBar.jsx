import React, { useState } from 'react';
/*css is in vehiclesList css */
const SearchBar = ({ onSearch }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ brand, model, category });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
