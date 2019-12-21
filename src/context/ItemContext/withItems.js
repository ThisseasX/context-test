import React from 'react';
import ItemContext from './item-context';

const withItems = Component => () => (
  <ItemContext.Consumer>
    {value => <Component items={value.items} addItem={value.addItem}></Component>}
  </ItemContext.Consumer>
);

export default withItems;
