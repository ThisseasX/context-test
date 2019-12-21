import React, { useState, useCallback, memo } from 'react';
import { useItems } from 'context/ItemContext';
import { Plus } from 'icons';
import classes from './style';

const ItemInput = () => {
  const [value, setValue] = useState('');
  const { addItem } = useItems();

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  });

  const handleClick = useCallback(() => {
    value
      .split(' ')
      .filter(v => v)
      .forEach(addItem);

    setValue('');
  });

  const onKeyDown = useCallback(({ key }) => {
    key === 'Enter' && handleClick();
  });

  return (
    <div className={classes.itemInputContainer}>
      <input onChange={handleChange} onKeyDown={onKeyDown} value={value} />
      <button disabled={!value.trim()} onClick={handleClick}>
        <Plus />
      </button>
    </div>
  );
};

export default memo(ItemInput);
