import React from 'react';

import { NavbarHeader } from './navbar.style';

const Navbar = () => (
    <NavbarHeader>
      <nav>
        <div></div>
        <div>
          <a>Logo Here</a>
        </div>
        <div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </nav>
    </NavbarHeader>
)

export default Navbar;