import React, { useState, useEffect, useCallback, memo } from 'react';
import ItemContext, { withItems, useItems } from 'context/ItemContext';
import { compose } from 'utils';
import classes from './style';

const ItemList = ({ items: itemsFromHoc }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { items: itemsFromHook } = useItems();

  const handleMouseEnter = useCallback(({ target: { dataset: { index } } }) => {
    setHoverIndex(+index);
  });

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  });

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [itemsFromHook]);

  return (
    <div className={classes.itemListContainer}>
      <ul className={classes.list}>
        <ItemContext.Consumer>
          {value =>
            value.items.map((item, index) => (
              <li
                key={index}
                data-index={index}
                className={index === hoverIndex ? classes.hover : ''}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </li>
            ))
          }
        </ItemContext.Consumer>
      </ul>

      <ul className={classes.list}>
        {itemsFromHoc.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className={index === hoverIndex ? classes.hover : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className={classes.list}>
        {itemsFromHook.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className={index === hoverIndex ? classes.hover : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default compose(
  memo,
  withItems,
)(ItemList);
