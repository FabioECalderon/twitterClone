import { useContext } from 'react';
import UserContext from '../containers/UserContext';

// import PropTypes from 'prop-types';

export default function User({ children }) {
  const value = useContext(UserContext);
  const { user } = value;

  return (
    user && (
      <div className="d-flex justify-content-between gap-2 mx-2 rounded-pill">
        <div className="d-flex">
          <div className="p-2">
            <img src={user.photo} className="rounded-circle" />
          </div>
          <div className="d-flex flex-column p-2">
            <strong>{user.name}</strong>
            <span>@{user.username}</span>
          </div>
        </div>
        {children}
      </div>
    )
  );
}

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]),
// };

// User.defaultProps = {
//   name: 'Fabio Calderon',
//   username: 'fcalderon',
//   photo: 'https://placehold.co/40x40',
// };
