"use client";

import { Card, Eyebrow, Pill, MainContainer, Shell } from "../../css/main";
import { AcceptButton, RejectButton } from "../../css/common";
import { Coins } from "lucide-react";
import { useState, useContext } from "react";
import { useUser } from "../providers";

export default function Page() {
  const { user } = useUser();
  const [coins, setCoins] = useState(0);

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
          <AcceptButton onClick={() => setCoins((c) => c + 100)}>
            Adicionar créditos
          </AcceptButton>
          <RejectButton onClick={() => setCoins((c) => c - 100)}>
            Remover créditos
          </RejectButton>
        </MainContainer>
      </Card>
    </Shell>
  );
}
