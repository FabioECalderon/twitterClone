import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import User from './User';

export default function Follow() {
  return (
    <User>
      <div className="m-1">
        <Button variant="dark">Follow</Button>
      </div>
    </User>
  );
}
