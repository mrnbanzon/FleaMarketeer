import React from 'react';

const AddItem = props => {
  return (
    <form>
      <label>
        <input type="text" placeholder="item" />
      </label>
      <span>|</span>
      <label>
        <input type="text" placeholder="value" />
      </label>
      <span>x</span>
      <label>
        <input type="text" placeholder="amount" />
      </label>
      <button type="submit">+</button>
    </form>
  );
};

export default AddItem;
