"use client";

import { Container, Shell, Title } from "../../css/admin";
import AdminCard from "../../components/admin-card";
export default function Page() {
  return (
    <Shell>
      <Container>
        <Title>Pedidos</Title>
        <AdminCard name="João" credits={200} />
      </Container>
    </Shell>
  );
}
