import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: ${({ isHidden }) => isHidden ? '0' : '-1000px'};
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ isHidden }) => isHidden ? 'rgba(0, 0, 0, 0.4)' : 'none'};
  z-index: 100;
  transition: background 0.6s ease-out;
`;