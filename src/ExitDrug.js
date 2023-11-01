import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExitDrug.css';

const Exit = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="exit-drug">
      <h1>Exit Drug</h1>
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
    
      {confirmed ? (
        // Show the "Exit" button and link to the home page
        <div>
          <h1>Exit</h1>
          <p>You have successfully exited.</p>
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        // Show the confirmation question and "Yes" and "No" buttons
        <div>
          <h1>Do You Want to Exit?</h1>
          <button onClick={() => setConfirmed(true)}>Yes</button>
          <button onClick={() => setConfirmed(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default Exit;

