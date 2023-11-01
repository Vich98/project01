import React from 'react';
import { Link } from 'react-router-dom';
import './AddDrug.css';
import img3 from './images/pharmacy.jpg';


const AddDrug = () => {
  return (
    <div className="add-drug">
      <h1>Add Drug</h1>
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
      <div>
        <img src={img3} alt="" />
      </div>
      <div className="input-fields">
       
        <div className="input-row">
          <label>Drug Name</label>
          <input type="text" />
        </div>
        <div className="input-row">
          <label>Brand</label>
          <input type="text" />
        </div>
        <div className="input-row">
          <label>Date</label>
          <input type="text" />
        </div>
        <div className="input-row">
          <label>Quantity</label>
          <input type="text" />
        </div>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default AddDrug;

