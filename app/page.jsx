import { Card, Eyebrow, Meta, Shell } from "../css/login";
import { MoveRight } from "lucide-react";
import { Button, TextBox } from "../css/common";

export default function Page() {
  return (
    <Shell>
      <Card>
        <Eyebrow>Aplicação de Websocket</Eyebrow>
        <Meta style={{ marginTop: "32px", alignItems: "center" }}>
          <TextBox placeholder="Entre com um usuário" />
          <Button>
            <MoveRight />
          </Button>
        </Meta>
      </Card>
    </Shell>
  );
}
