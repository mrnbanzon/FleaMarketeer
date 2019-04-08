import React from 'react';

const Summary = props => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary__details">
        <div>
          <span>total sales: </span>
          <span>$105.90</span>
        </div>
        <div>
          <span>inventory count: </span>
          <span>210</span>
        </div>
        <div>
          <span>estimate v. actual: +/- </span>
          <span>(+3.50)</span>
        </div>
        <div>
          <span>hot item: </span>
          <span>Teddy Bear</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
