import React from 'react';
import AddItem from './AddItem';

const Inventory = ({ items, addItem }) => {
  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <div className="inventory__table">
        <AddItem add={addItem} />
        <table>
          <thead>
            <tr>
              <th>item</th>
              <th>val.</th>
              <th>amnt.</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {items.map(prod => {
              return (
                <tr key={prod.id}>
                  <td>{prod.item}</td>
                  <td>{prod.value.toFixed(2)}</td>
                  <td>{prod.amount}</td>
                  <td>{prod.diff.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
