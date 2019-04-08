import React from 'react';
import AddItem from '../shared/AddItem';

// test data -- remove later
const data = [
  {
    id: 0,
    item: 'Pooh Bear Plush Toy',
    val: '5.50',
    cnt: '49',
    diff: '2.20'
  },
  {
    id: 1,
    item: 'Red Balloon',
    val: '2.00',
    cnt: '120',
    diff: '0.0'
  },
  {
    id: 2,
    item: 'Piglet Plush Toy',
    val: '4.50',
    cnt: '62',
    diff: '1.70'
  },
  {
    id: 3,
    item: 'Tigger Plush Toy',
    val: '6.00',
    cnt: '54',
    diff: '-0.50'
  },
  {
    id: 4,
    item: 'Eyeore Plush Toy',
    val: '4.00',
    cnt: '83',
    diff: '-0.25'
  }
];

const Inventory = props => {
  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <div className="inventory__details">
        <AddItem />
        <table>
          <thead>
            <tr>
              <th>item</th>
              <th>val</th>
              <th>cnt</th>
              <th>+/-</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map(prod => {
              return (
                <tr key={prod.id}>
                  <td>{prod.item}</td>
                  <td>{prod.val}</td>
                  <td>{prod.cnt}</td>
                  <td>{prod.diff}</td>
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
