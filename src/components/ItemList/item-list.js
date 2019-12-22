import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import ItemContext, { withItems, useItems } from 'context/ItemContext';
import { compose } from 'utils';
import classes from './style';

const ItemList = ({ items: itemsFromHoc }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { items: itemsFromHook } = useItems();

  const itemList = useRef();

  const handleMouseEnter = useCallback(
    ({
      currentTarget: {
        dataset: { index },
      },
    }) => {
      setHoverIndex(+index);
    },
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  });

  useEffect(() => {
    const { children } = itemList.current;
    const lastChild = children[children.length - 1];
    lastChild && lastChild.scrollIntoView({ behavior: 'smooth' });
  }, [itemsFromHook]);

  return (
    <div className={classes.itemListContainer}>
      <ul ref={itemList} className={classes.list}>
        <ItemContext.Consumer>
          {value =>
            value.items.map((item, index) => (
              <li
                key={index}
                data-index={index}
                className={`
                  ${classes.listItem}
                  ${index === hoverIndex ? classes.hover : ''}
                `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className={classes.itemLabel}>{item}</span>
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
            className={`
              ${classes.listItem}
              ${index === hoverIndex ? classes.hover : ''}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={classes.itemLabel}>{item}</span>
          </li>
        ))}
      </ul>

      <ul className={classes.list}>
        {itemsFromHook.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className={`
              ${classes.listItem}
              ${index === hoverIndex ? classes.hover : ''}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={classes.itemLabel}>{item}</span>
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
