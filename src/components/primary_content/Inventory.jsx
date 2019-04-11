import React from 'react';
import AddItem from './AddItem';

// test data -- remove later
const data = [
  {
    id: 0,
    item: 'Pooh Bear Plush Toy',
    value: 5.5,
    amount: '49',
    diff: 2.2
  },
  {
    id: 1,
    item: 'Red Balloon',
    value: 2,
    amount: '120',
    diff: 0
  },
  {
    id: 2,
    item: 'Piglet Plush Toy',
    value: 4.5,
    amount: '62',
    diff: 1.7
  },
  {
    id: 3,
    item: 'Tigger Plush Toy',
    value: 6.0,
    amount: '54',
    diff: -0.5
  },
  {
    id: 4,
    item: 'Eyeore Plush Toy',
    value: 4.0,
    amount: '83',
    diff: -0.25
  }
];

const Inventory = props => {
  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <div className="inventory__details">
        <AddItem add={state => console.log(state)} />
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
            {data.map(prod => {
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
