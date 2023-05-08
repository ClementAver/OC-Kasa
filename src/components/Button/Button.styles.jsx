import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ filled, theme }) => (filled === "yes" ? theme.base.primary : "hsla(0, 0%, 0%, 0)")};
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CollapseButton = styled(StyledButton)`
  transform: ${({ deg }) => `rotate(${deg}deg)`};
  &:hover {
    transform: scale(1.1) ${({ deg }) => `rotate(${deg}deg)`};
  }
`;
