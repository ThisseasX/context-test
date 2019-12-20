import React, { useState, useEffect } from 'react';

const ItemsContext = React.createContext([]);

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(['1', '2', '3']);
  }, []);

  return <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>;
};

export { ItemsProvider as default, ItemsContext };
