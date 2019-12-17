import React from 'react';

import { StyledNav, StyledUl, StyledLi, StyledLink } from './sideDraw.style';

const SideDraw = () => (
    <StyledNav>
      <StyledUl>
        <StyledLi><StyledLink to="/">Products</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/">Users</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
)

export default SideDraw;