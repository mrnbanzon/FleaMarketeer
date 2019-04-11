import React from 'react';

// test data
const data = {
  total: '105.90',
  count: '210',
  diff: '+3.50',
  hotItem: 'Teddy Bear'
};

const Summary = props => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary__details">
        <div>
          <span>total sales: </span>
          <span>{'$' + data.total}</span>
        </div>
        <div>
          <span>inventory count: </span>
          <span>{data.count}</span>
        </div>
        <div>
          <span>estimate v. actual: +/- </span>
          <span>{'(' + data.diff + ')'}</span>
        </div>
        <div>
          <span>hot item: </span>
          <span>{data.hotItem}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
