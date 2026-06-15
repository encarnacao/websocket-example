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
