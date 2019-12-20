import React, { useContext } from 'react';
import { ItemsContext } from '/ItemsProvider';

const useItems = () => useContext(ItemsContext);

export default useItems;
