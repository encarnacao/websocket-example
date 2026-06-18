"use client";

import {
  Card,
  Eyebrow,
  Pill,
  MainContainer,
  Shell,
  StyledToast,
} from "../../css/main";
import { AcceptButton, RejectButton, GenericButton } from "../../css/common";
import { Coins } from "lucide-react";
import { useState, useContext, useEffect, useRef } from "react";
import { useUser } from "../providers";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  const { user } = useUser();
  const [coins, setCoins] = useState(0);
  const router = useRouter();
  const socketRef = useRef(null);
  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      socketRef.current = io(process.env.NEXT_PUBLIC_API_URL, {
        query: { userId: user.userId },
      });
      const socket = socketRef.current;
      socket.on("creditUpdate", (data) => {
        setCoins(data.amount);
      });
      socket.on("pong", (data) => {
        toast(`Pong recebido! Latência: ${Date.now() - data.timestamp}ms`);
      });
      return () => {
        socket.disconnect();
      };
    }
  }, [user?.userId]);

  function handleAddCredits() {
    async function requestAddCredits() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/credits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 100, userId: user.userId }),
        },
      );
      console.log(await response.json());
      if (!response.ok) {
        console.error("Erro ao adicionar créditos:", response.statusText);
      }
    }
    requestAddCredits();
  }

  function handleRemoveCredits() {
    async function requestRemoveCredits() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/credits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: -100, userId: user.userId }),
        },
      );
      console.log(await response.json());
      if (!response.ok) {
        console.error("Erro ao remover créditos:", response.statusText);
      }
    }
    requestRemoveCredits();
  }

  function pingFunction() {
    const socket = socketRef.current;
    if (!socket) return;
    const startTime = Date.now();
    socket.emit("ping", { timestamp: startTime });
  }

  return (
    <Shell>
      <Card>
        <Eyebrow>Bem-vindo, {user?.username || "usuário"}</Eyebrow>
        <MainContainer style={{ marginTop: "32px", alignItems: "center" }}>
          <Pill>
            <span style={{ fontSize: "1.5rem" }}>{coins}</span>
            <Coins
              size={32}
              style={{
                display: "inline-flex",
                verticalAlign: "middle",
                marginLeft: "32px",
              }}
            />
          </Pill>
          <AcceptButton onClick={handleAddCredits}>
            Adicionar créditos
          </AcceptButton>
          <RejectButton onClick={handleRemoveCredits}>
            Remover créditos
          </RejectButton>
          <GenericButton onClick={pingFunction}>Ping</GenericButton>
        </MainContainer>
      </Card>
      <StyledToast />
    </Shell>
  );
}
