/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar bg-base-300 fixed top-0 z-50 flex justify-between h-16">
      <Link to="/" className="btn btn-ghost normal-case text-3xl">Forum App</Link>
    </header>
  );
}

export default Header;
