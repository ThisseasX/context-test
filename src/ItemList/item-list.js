import React from 'react';
import { ItemsContext } from '/ItemsProvider';
import { withItems, useItems } from '/ItemsProvider';

const ItemList = ({ items: itemsFromHoc }) => {
  const itemsFromHook = useItems();

  return (
    <>
      <ItemsContext.Consumer>
        {items => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </ItemsContext.Consumer>

      <ul>
        {itemsFromHoc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {itemsFromHook.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default withItems(ItemList);
