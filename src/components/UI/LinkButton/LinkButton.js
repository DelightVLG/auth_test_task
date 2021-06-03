import React from 'react';
import { Link } from 'react-router-dom';

import './LinkButton.css';

function LinkButton({ title, path }) {
  return (
    <Link to={`/${path}`}>{title}</Link>
  );
}

export default LinkButton;
