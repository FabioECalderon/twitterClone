import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();

  function onSignUp() {
    navigate('/signup');
  }

  function onSignIn() {
    navigate('/signin');
  }

  return (
    <div className="d-flex mt-2 py-4 border-top">
      <div className="d-flex flex-column flex-grow-1">
        <span>New on Twitter?</span>
        <Button
          className="rounded-pill flex-grow-1 m-2 py-2 fs-6 text-white "
          onClick={onSignUp}
        >
          Sign Up
        </Button>
        <span>Already have an account?</span>
        <Button
          variant="light"
          className="rounded-pill flex-grow-1 m-2 py-2 fs-6"
          onClick={onSignIn}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
