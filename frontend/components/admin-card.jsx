import { Card, UserName, Pill } from "../css/admin";
import { AcceptButton, RejectButton } from "../css/common";
import { Coins, Check, X } from "lucide-react";

export default function AdminCard(args) {
  function handleRequest(action) {
    if (!args.socket) return;
    args.socket.emit("adminResponse", {
      txnId: args.txnId,
      approved: action === "approve",
    });
  }

  return (
    <Card>
      <UserName>{args.name}</UserName>
      <Pill>
        {args.credits}{" "}
        <Coins style={{ display: "inline-flex", verticalAlign: "middle" }} />
      </Pill>
      <AcceptButton onClick={() => handleRequest("approve")}>
        <Check strokeWidth={4} />
      </AcceptButton>
      <RejectButton onClick={() => handleRequest("reject")}>
        <X strokeWidth={4} />
      </RejectButton>
    </Card>
  );
}
