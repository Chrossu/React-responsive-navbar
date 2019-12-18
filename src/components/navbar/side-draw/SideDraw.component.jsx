import React from 'react';
import { connect } from 'react-redux';

import { toggleSideDraw } from '../../../redux/sidedraw/sidedraw.actions';

import { StyledNav, StyledUl, StyledLi, StyledLink, StyledClose } from './sideDraw.style';

const SideDraw = ({ toggleSideDraw }) => (
    <StyledNav>
      <StyledUl>
        <StyledClose onClick={toggleSideDraw} />
        <StyledLi><StyledLink to="/">Products</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/">Users</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
)

export default connect(null, { toggleSideDraw })(SideDraw);