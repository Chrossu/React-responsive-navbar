import React from 'react';

import { StyledNav, StyledLink } from './sideDraw.style';

const SideDraw = () => (
    <StyledNav>
      <ul>
        <li><StyledLink>Products</StyledLink></li>
        <li><StyledLink>Users</StyledLink></li>
      </ul>
    </StyledNav>
)

export default SideDraw;