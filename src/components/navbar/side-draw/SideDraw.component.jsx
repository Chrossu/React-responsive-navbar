import React from 'react';
import { connect } from 'react-redux';

import { toggleSideDraw } from '../../../redux/sidedraw/sidedraw.actions';

import { StyledNav, StyledUl, StyledLi, StyledLink, StyledClose } from './sideDraw.style';

const SideDraw = ({ toggleSideDraw, isHidden }) => (
    <StyledNav isHidden={isHidden}>
      <StyledUl>
        <StyledClose onClick={toggleSideDraw} />
        <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/contact">Contact</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/about">About</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
)

const mapStateToProps = state => ({
  isHidden: state.sidedraw.isSideDrawOpen
})

export default connect(mapStateToProps, { toggleSideDraw })(SideDraw);