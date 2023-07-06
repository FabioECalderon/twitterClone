import PropTypes from 'prop-types';

export default function User({ children, name, username, photo }) {
  return (
    <div className="d-flex justify-content-between gap-2 mx-2 rounded-pill">
      <div className="d-flex">
        <div className="p-2">
          <img src={photo} className="rounded-circle" />
        </div>
        <div className="d-flex flex-column p-2">
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

User.defaultProps = {
  name: 'Fabio Calderon',
  username: 'fcalderon',
  photo: 'https://placehold.co/40x40',
};
