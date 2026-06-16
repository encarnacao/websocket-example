"use client";

import { Card, Eyebrow, Meta, Shell } from "../css/main";
import { MoveRight } from "lucide-react";
import { Button, TextBox } from "../css/common";
import { useState, useContext } from "react";
import { useUser } from "./providers";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState();
  const router = useRouter();
  const { user, setUser } = useUser();
  function handleInputName(input) {
    setUsername(input.target.value);
  }

  function handleLogin() {
    if (!username) return;
    async function requestLogin() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        setUser(data);
        router.push("/main");
      } else {
        console.error("Login failed");
      }
    }
    requestLogin();
    router.push("/main");
  }

  return (
    <Shell>
      <Card>
        <Eyebrow>Aplicação de Websocket</Eyebrow>
        <Meta style={{ marginTop: "32px", alignItems: "center" }}>
          <TextBox
            placeholder="Entre com um usuário"
            onChange={handleInputName}
          />
          <Button>
            <MoveRight onClick={handleLogin} />
          </Button>
        </Meta>
      </Card>
    </Shell>
  );
}
