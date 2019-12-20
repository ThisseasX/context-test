import React from 'react';
import ItemList from '/ItemList';
import ItemsProvider from '/ItemsProvider';

const App = () => (
  <ItemsProvider>
    <ItemList />
  </ItemsProvider>
);

export default App;
