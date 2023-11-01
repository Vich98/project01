import React from 'react';
import { Link } from 'react-router-dom';
import './StoreDrug.css';

const StoreDrug = () => {
  return (
    <div className="store-drug">
      <h1>Store Drug</h1>
    <div>
      <Link to="/AddDrug">
        <button className="side-button ">Add Drug</button>
      </Link>
      <Link to="/StoreDrug">
        <button className="side-button">Store Drug</button>
      </Link>
      <Link to="/ViewDrug">
        <button className="side-button">View Drug</button>
      </Link>
      <Link to="/DeleteDrug">
        <button className="side-button">Delete Drug</button>
      </Link>
      <Link to="/ExitDrug">
        <button className="side-button">Exit</button>
      </Link>
      
      
      </div>
      <div className="input-fields">
        <div className="input-row">
          <label>Drug Name</label>
          <select className="input-box">
            <option value="Drug1">Drug 1</option>
            <option value="Drug2">Drug 2</option>
            <option value="Drug3">Drug 3</option>
          </select>
        </div>
        <div className="input-row">
          <label>Brand</label>
          <select className="input-box">
            <option value="Brand1">Brand 1</option>
            <option value="Brand2">Brand 2</option>
            <option value="Brand3">Brand 3</option>
          </select>
        </div>
        
        
      
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default StoreDrug;

