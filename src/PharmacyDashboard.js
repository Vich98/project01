//PharmacyDashboard
import React from 'react';
import { Link } from 'react-router-dom';
import './PharmacyDashboard.css';
import './PharmacyDashboard.css';
import img1 from './images/medicine.jpg';


const PharmacyDashboard = () => {
  return (
   
    <div className="pharmacy-dashboard">
      <h1>Pharmacy Dashboard</h1>
      <Link to="/AddDrug">
        <button className="side-button">Add Drug</button>
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
      <img src={img1} alt="" />
    </div>
    

    
    
  );
};

export default PharmacyDashboard;
