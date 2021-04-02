import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/">Go home</Link>
      </div>
    </div>
  )
}

export default NotFound;
