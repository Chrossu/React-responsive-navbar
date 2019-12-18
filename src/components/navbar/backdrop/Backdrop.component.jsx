import React from 'react';
import { connect } from 'react-redux';

import { toggleSideDraw } from '../../../redux/sidedraw/sidedraw.actions';

import { StyledBackdrop } from './backdrop.style';

const Backdrop = ({ toggleSideDraw }) => (
    <StyledBackdrop onClick={toggleSideDraw} />
)

export default connect(null, { toggleSideDraw })(Backdrop);