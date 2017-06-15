import React from 'react';

import {Link} from 'react-router-dom';

const liStyle = {
  display: 'inline-block',
  margin: '15px 30px'
}

const view = () => {
  return (
    <div>
      <ul>
        <li style={liStyle}><Link to="home">Home</Link></li>
        <li style={liStyle}><Link to="about">About</Link></li>
      </ul>
    </div>
  );
};
export {view};