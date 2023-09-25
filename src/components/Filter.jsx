import React, { useState } from "react";

const Filter = ({ onSort, onSearch, sort, searchValue }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          value={searchValue}
          onChange={onSearch}
        ></input>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="newest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="oldest">
            earliest
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
