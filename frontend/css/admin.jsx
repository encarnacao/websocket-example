import styled from "styled-components";

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
`;

export const Container = styled.div`
  width: min(80%, 760px);
  padding: 40px;
  border: 1px solid var(--border);
  border-radius: 28px;
  background: var(--surface);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--pink);
`;

export const Card = styled.div`
  border: 1px solid var(--border);
  border-radius: 28px;
  background: var(--surface2);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
  display: grid;
  gap: 16px;
  padding: 24px;
  grid-template-columns: 1fr 1fr;
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

export const UserName = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
`;

export const Pill = styled.div`
  display: flex;
  padding: 12px 20%;
  background: var(--pink);
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 9999px;
  justify-content: space-between;
  align-items: center;
`;
