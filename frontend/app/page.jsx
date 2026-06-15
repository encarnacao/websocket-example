"use client";

import { Card, Eyebrow, Meta, Shell } from "../css/login";
import { MoveRight } from "lucide-react";
import { Button, TextBox } from "../css/common";
import { useState, useContext } from "react";
import { useUser } from "./providers";

export default function Page() {
  const [username, setUsername] = useState();
  const { user, setUser } = useUser();
  function handleInputName(input) {
    setUsername(input.target.value);
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
            <MoveRight
              onClick={() => {
                setUser({ username, websocketId: null });
              }}
            />
          </Button>
        </Meta>
      </Card>
    </Shell>
  );
}
