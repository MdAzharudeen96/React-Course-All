import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Counter from './containers/Counter';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} exact />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
      <Counter />
    </React.Fragment>
  );
};

export default App;