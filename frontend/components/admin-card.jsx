import { Card, UserName, Pill } from "../css/admin";
import { AcceptButton, RejectButton } from "../css/common";
import { Coins, Check, X } from "lucide-react";

export default function AdminCard(args) {
  function handleRequest(action) {
    async function sendRequest() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/pending-transaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            txnId: args.txnId,
            approved: action === "approve",
          }),
        },
      );
      if (!response.ok) {
        console.error("Erro ao processar transação:", response.statusText);
      } else {
        console.log("Transação processada com sucesso");
        args.setOrders((prev) => prev.filter((o) => o.txn_id !== args.txnId));
      }
    }
    sendRequest();
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
