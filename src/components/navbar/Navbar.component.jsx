import React from 'react';

import Burger from './burger/Burger.component';

import { StyledHeader, StyledLogo, StyledLink, StyledNav, StyledUl, StyledLi, StyledSpacer } from './navbar.style';

const Navbar = () => (
  <StyledHeader>
    <StyledNav>
      <div>
        <Burger />
      </div>
      <StyledLogo to="/">THE LOGO</StyledLogo>
      <StyledSpacer />
      <div>
        <StyledUl>
          <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/contact">Contact</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/about">About</StyledLink></StyledLi>
        </StyledUl>
      </div>
    </StyledNav>
  </StyledHeader>
)

export default Navbar;