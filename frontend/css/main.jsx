import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

export const Shell = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px;
`;

export const Card = styled.section`
  width: min(100%, 760px);
  padding: 40px;
  border: 1px solid var(--border);
  border-radius: 28px;
  background: var(--surface);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(18px);
`;

export const Eyebrow = styled.p`
  margin-bottom: 16px;
  color: var(--cyan);
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  justify-content: space-evenly;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  justify-content: space-evenly;
`;

export const Pill = styled.span`
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: 0.92rem;
`;

export const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: min(100%, 420px);
  }

  .Toastify__toast {
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--surface);
    color: var(--text);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(18px);
  }

  .Toastify__toast-body {
    padding: 4px 0;
  }

  .Toastify__progress-bar {
    background: var(--cyan);
  }
`;
