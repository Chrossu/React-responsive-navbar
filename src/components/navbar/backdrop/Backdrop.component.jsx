import React from 'react';
import { connect } from 'react-redux';

import { toggleSideDraw } from '../../../redux/sidedraw/sidedraw.actions';

import { StyledBackdrop } from './backdrop.style';

const Backdrop = ({ toggleSideDraw, isHidden }) => (
    <StyledBackdrop onClick={() => isHidden && toggleSideDraw} isHidden={isHidden} />
)

const mapStateToProps = state => ({
    isHidden: state.sidedraw.isSideDrawOpen
})

export default connect(mapStateToProps, { toggleSideDraw })(Backdrop);