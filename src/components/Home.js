import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='page-container'>
      <h1>Home</h1>
      <Link to='/choose-a-world'>Start</Link>
      <Link to='/add-questions'>Add Questions</Link>
    </div>
  );
};

export default Home;
