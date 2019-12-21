import React, { useState, useEffect, useCallback } from 'react';
import ItemContext from 'context/ItemContext';

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(item => setItems(oldItems => [...oldItems, item]));

  useEffect(() => {
    setItems(['1', '2', '3']);
  }, []);

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
