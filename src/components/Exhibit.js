import React from 'react';
import './Exhibit.css'; // Optional: styles if needed

function Exhibit({ heading, children }) {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
}

export default Exhibit;
