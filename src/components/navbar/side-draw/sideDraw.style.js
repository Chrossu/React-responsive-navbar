import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';

export const StyledNav = styled.div`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  padding: 1rem 1.25rem;
  transform: ${({ isHidden }) => isHidden ? 'translateX(0)' : 'translateX(-120%)'};
  transition: transform 0.4s ease-out;
`;

export const StyledUl = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  margin: 0.3rem 0;
`;

export const StyledLink = styled(Link)`
  color: #521751;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover, &:active {
    color: #fa923f;
  }
`;

export const StyledClose = styled(CloseIcon)`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
