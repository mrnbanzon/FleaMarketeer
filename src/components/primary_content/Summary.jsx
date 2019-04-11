import React from 'react';

const Summary = ({ inventoryCount, totalSales, avgDiff, hotItem }) => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary__details">
        <div>
          <span>total sales: </span>
          <span>{'$' + totalSales}</span>
        </div>
        <div>
          <span>inventory count: </span>
          <span>{inventoryCount}</span>
        </div>
        <div>
          <span>estimate v. actual: +/- </span>
          <span>{'(' + avgDiff + ')'}</span>
        </div>
        <div>
          <span>hot item: </span>
          <span>{hotItem}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
