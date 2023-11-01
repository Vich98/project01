//PharmacyPage
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PharmacyPage = () => {
  return (
    <div>
      <h1>Pharmacy Page</h1>
      <Link to="/drug-stores">
        <Button variant="primary">Drug Stores</Button>
      </Link>
      <Link to="/drug-issuing">
        <Button variant="success">Drug Issuing</Button>
      </Link>
    </div>
  );
};

export default PharmacyPage;