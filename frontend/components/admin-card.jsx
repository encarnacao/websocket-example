import { Card, UserName, Pill } from "../css/admin";
import { AcceptButton, RejectButton } from "../css/common";
import { Coins, Check, X } from "lucide-react";

export default function AdminCard(args) {
  return (
    <Card>
      <UserName>{args.name}</UserName>
      <Pill>
        {args.credits}{" "}
        <Coins style={{ display: "inline-flex", verticalAlign: "middle" }} />
      </Pill>
      <AcceptButton>
        <Check strokeWidth={4} />
      </AcceptButton>
      <RejectButton>
        <X strokeWidth={4} />
      </RejectButton>
    </Card>
  );
}
