import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  background: var(--pink);
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(255, 121, 198, 0.24);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    filter 160ms ease;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 14px 30px rgba(255, 121, 198, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 22px rgba(255, 121, 198, 0.2);
  }

  &:focus-visible {
    outline: 2px solid rgba(139, 233, 253, 0.9);
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
    transform: none;
  }
`;

export const AcceptButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  background: var(--green);
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(80, 250, 123, 0.24);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    filter 160ms ease;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 14px 30px rgba(80, 250, 123, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 22px rgba(80, 250, 123, 0.2);
  }

  &:focus-visible {
    outline: 2px solid rgba(139, 233, 253, 0.9);
    outline-offset: 3px;
  }
`;

export const GenericButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  background: var(--cyan);
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(80, 150, 250, 0.24);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    filter 160ms ease;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 14px 30px rgba(80, 150, 250, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 22px rgba(80, 150, 250, 0.2);
  }

  &:focus-visible {
    outline: 2px solid rgba(139, 233, 253, 0.9);
    outline-offset: 3px;
  }
`;

export const RejectButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  background: var(--red);
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(255, 85, 85, 0.24);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    filter 160ms ease;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 14px 30px rgba(255, 85, 85, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 22px rgba(255, 85, 85, 0.2);
  }

  &:focus-visible {
    outline: 2px solid rgba(139, 233, 253, 0.9);
    outline-offset: 3px;
  }
`;
