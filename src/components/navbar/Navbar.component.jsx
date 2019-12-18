import React from 'react';
import { connect } from 'react-redux';

import Burger from './burger/Burger.component';
import { toggleSideDraw } from '../../redux/sidedraw/sidedraw.actions';

import { StyledHeader, StyledLogo, StyledLink, StyledNav, StyledUl, StyledLi, StyledSpacer } from './navbar.style';

const Navbar = ({ toggleSideDraw }) => (
  <StyledHeader>
    <StyledNav>
      <div onClick={toggleSideDraw}>
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

export default connect(null, { toggleSideDraw })(Navbar);