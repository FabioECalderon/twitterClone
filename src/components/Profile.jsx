import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from '@emotion/styled';
import User from './User';

const ProfileContainer = styled('div')(({ theme }) => ({
  borderRadius: theme.borders.radius.pill,
  '&:hover': {
    backgroundColor: theme.colors['gray-200'],
    color: theme.colors['gray-900'],
  },
}));

export default function Profile() {
  return (
    <ProfileContainer>
      <User>
        <div className=" d-flex align-items-center">
          <DropdownButton
            drop={'up'}
            variant=""
            title={<i className="bi bi-three-dots fs-5"></i>}
          >
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Security & Password</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Sign Out</Dropdown.Item>
          </DropdownButton>
        </div>
      </User>
    </ProfileContainer>
  );
}
