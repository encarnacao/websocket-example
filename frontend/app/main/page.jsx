"use client";

import { Card, Eyebrow, Pill, MainContainer, Shell } from "../../css/main";
import { AcceptButton, RejectButton } from "../../css/common";
import { Coins } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { useUser } from "../providers";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUser();
  const [coins, setCoins] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      const socket = io(process.env.NEXT_PUBLIC_API_URL, {
        query: { userId: user.userId },
      });
      socket.on("creditUpdate", (data) => {
        setCoins(data.amount);
      });
      return () => {
        socket.disconnect();
      };
    }
  }, [user?.username]);

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
      console.log(response.json());
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
      console.log(response.json());
      if (!response.ok) {
        console.error("Erro ao remover créditos:", response.statusText);
      }
    }
    requestRemoveCredits();
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
        </MainContainer>
      </Card>
    </Shell>
  );
}
