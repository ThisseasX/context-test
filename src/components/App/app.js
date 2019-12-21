import React from 'react';
import ItemProvider from 'components/ItemProvider';
import ItemInput from 'components/ItemInput';
import ItemList from 'components/ItemList';
import classes from './style';

const App = () => (
  <div className={classes.app}>
    <ItemProvider>
      <ItemInput />
      <ItemList />
    </ItemProvider>
  </div>
);

export default App;
