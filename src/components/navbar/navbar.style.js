import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #521751;
  height: 56px;
`;

export const StyledNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #fa923f;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledLi = styled.li`
  padding: 0 0.5rem;
`;

export const StyledSpacer = styled.div`
  flex: 1;
`

export const StyledDiv = styled.div`
  &:active, &:focus {
    outline: none;
  }
`;