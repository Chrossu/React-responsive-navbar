import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledNav = styled.div`
  height: 100%;
  background: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  padding: 1rem 1.25rem;
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
