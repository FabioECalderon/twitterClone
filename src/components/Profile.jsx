import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import User from './User';

export default function Profile() {
  return (
    <User>
      <div className=" d-flex me-4 align-items-center">
        <DropdownButton
          drop={'up'}
          variant="light"
          title={<i className="bi bi-three-dots fs-5"></i>}
        >
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Security & Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Sign Out</Dropdown.Item>
        </DropdownButton>
      </div>
    </User>
  );
}
