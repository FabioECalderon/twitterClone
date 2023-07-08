import Create from '../components/Create';

export default function Compose() {
  const user = {};

  return (
    <>
      <h1 className="fs-4 my-2 fw-bolder">Tweet</h1>
      {user && <Create />}
    </>
  );
}
