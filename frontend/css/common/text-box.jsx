import styled from "styled-components";

export const TextBox = styled.input`
  width: 80%;
  border: 1px solid rgba(248, 248, 242, 0.14);
  border-radius: 14px;
  padding: 14px 16px;
  background: rgba(68, 71, 90, 0.82);
  color: var(--text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    background-color 160ms ease;

  &::placeholder {
    color: var(--muted);
  }

  &:hover {
    background: rgba(68, 71, 90, 0.94);
  }

  &:focus {
    border-color: rgba(255, 121, 198, 0.75);
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 121, 198, 0.14);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;
