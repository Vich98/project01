import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DeleteDrug.css';

const DeleteDrug = () => {
  // Define states for selected Drug Name and Brand
  const [selectedDrugName, setSelectedDrugName] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  // Define a state for showing the delete success notification
  const [showNotification, setShowNotification] = useState(false);

  // Define a function to handle deletion
  const handleDelete = () => {
    // Implement your delete logic here

    // Show the delete success notification
    setShowNotification(true);

    // Reset selected Drug Name and Brand
    setSelectedDrugName('');
    setSelectedBrand('');

    // Delay hiding the notification and details after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <div className="delete-drug">
      <h1>Delete Drug</h1>
      <div>
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
      </div>
      <div className="select-buttons">
        <select
          className="select-box"
          onChange={(e) => setSelectedDrugName(e.target.value)}
          value={selectedDrugName}
        >
          <option value="">Select Drug Name</option>
          <option value="Drug1">Drug 1</option>
          <option value="Drug2">Drug 2</option>
          <option value="Drug3">Drug 3</option>
        </select>
        <select
          className="select-box"
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value="">Select Brand</option>
          <option value="Brand1">Brand 1</option>
          <option value="Brand2">Brand 2</option>
          <option value="Brand3">Brand 3</option>
        </select>
      </div>
      {selectedDrugName && selectedBrand && (
        <>
          <table className="store-table">
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Brand</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedDrugName}</td>
                <td>{selectedBrand}</td>
                <td>100</td> {/* Replace with the actual quantity */}
              </tr>
            </tbody>
          </table>
          <div className="delete-buttons">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete All
            </button>
          </div>
          {showNotification && (
            <div className="notification">Delete Successful</div>
          )}
        </>
      )}
    </div>
  );
};

export default DeleteDrug;

