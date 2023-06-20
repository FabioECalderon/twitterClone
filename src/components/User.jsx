import React from 'react';

export default function User({ children }) {
  return (
    <div className="d-flex justify-content-between gap-2 bg-light mx-2 rounded-pill">
      <div className="d-flex">
        <div className="p-2">
          <img src="https://placehold.co/40x40" className="rounded-circle" />
        </div>
        <div className="d-flex flex-column p-2">
          <strong>Fabio Calderon</strong>
          <span>@fabioCalder</span>
        </div>
      </div>
      {children}
    </div>
  );
}
