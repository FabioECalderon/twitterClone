import { useContext } from 'react';

import UserContext from '../containers/UserContext';
import Tweet from '../components/Tweet';
import Create from '../components/Create';

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1 className="fs-4 my-2 fw-bolder">Home</h1>
      {user && <Create />}
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
}
