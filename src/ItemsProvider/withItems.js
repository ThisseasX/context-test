import React from 'react';
import { ItemsContext } from '/ItemsProvider';

const withItems = Component => () => (
  <ItemsContext.Consumer>
    {items => <Component items={items}></Component>}
  </ItemsContext.Consumer>
);

export default withItems;
