import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewDrug.css';
import img4 from './images/drugs.jpg';

const ViewDrug = () => {
  const [selectedDrug, setSelectedDrug] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [storeData, setStoreData] = useState([]);

  // Sample data for the store
  const storeDataSample = [
    { drugName: 'Drug 1', brand: 'Brand A', quantity: 100 },
    { drugName: 'Drug 1', brand: 'Brand B', quantity: 50 },
    { drugName: 'Drug 2', brand: 'Brand A', quantity: 75 },
  ];

  // Function to handle drug selection
  const handleDrugSelection = (event) => {
    setSelectedDrug(event.target.value);
  };

  // Function to handle brand selection
  const handleBrandSelection = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Function to filter the store data based on drug and brand selection
  const filterStoreData = () => {
    const filteredData = storeDataSample.filter(
      (item) => item.drugName === selectedDrug && item.brand === selectedBrand
    );
    setStoreData(filteredData);
  };

  return (
    <div className="view-drug">
      <h1>View Drug</h1>
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
      <div className="select-buttons">
        <label>Drug Name:</label>
        <select className="select-box" onChange={handleDrugSelection}>
          <option value="">Select Drug</option>
          <option value="Drug 1">Drug 1</option>
          <option value="Drug 2">Drug 2</option>
        </select>
        <label>Brand:</label>
        <select className="select-box" onChange={handleBrandSelection}>
          <option value="">Select Brand</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </select>
        <button className="filter-button" onClick={filterStoreData}>
          Filter
        </button>
      </div>
      <table className="store-table">
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Brand</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {storeData.map((item, index) => (
            <tr key={index}>
              <td>{item.drugName}</td>
              <td>{item.brand}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="image-container">
        <img src={img4} alt="   " />
      </div>
    </div>
    
  );

          }
        

export default ViewDrug;







