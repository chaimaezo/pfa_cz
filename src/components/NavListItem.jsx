import React from 'react'
import './navListItem.css';
import { Link } from 'react-router-dom';

function NavListItem({nav , navOnclick}) {
  return (
    <li>
        <Link 
            className={nav.active ? 'active' : undefined} 
            to = {nav.Link} 
            onClick={() =>navOnclick(nav._id)}
        >
            {nav.name === 'home' ? <i className="bi bi-house"></i> : nav.name }
        </Link>
    </li>
  );
}

export default NavListItem;