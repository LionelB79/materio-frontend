import React from 'react';
import LocalityList from '../layouts/LocalityList';

const LocalitiesPage: React.FC = () => {
  return (
   <>
      <h1 className="text-2xl font-bold mb-6">Gestion des Localités</h1>
      <LocalityList />
</>
  );
};

export default LocalitiesPage;