// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PharmacyDashboard from './PharmacyDashboard';
import AddDrug from './AddDrug';
import StoreDrug from './StoreDrug';
import ViewDrug from './ViewDrug';
import DeleteDrug from './DeleteDrug';
import ExitDrug from './ExitDrug';
import Navbar from './Navbar';



function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" exact element={<PharmacyDashboard />} />
          <Route path="/AddDrug" exact element={<AddDrug />} />
          <Route path="/StoreDrug" exact element={<StoreDrug />} />
          <Route path="/ViewDrug" exact element={<ViewDrug />} />
          <Route path="/DeleteDrug" exact element={<DeleteDrug />} />
          <Route path="/ExitDrug" exact element={<ExitDrug />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
