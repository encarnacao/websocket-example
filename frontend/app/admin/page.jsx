"use client";

import { Container, Shell, Title } from "../../css/admin";
import AdminCard from "../../components/admin-card";
import { useState, useEffect } from "react";

export default function Page() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const fetchOrders = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/pending-transactions`,
      );
      const data = await response.json();
      setOrders(data.transactions);
      console.log(data);
    };
    fetchOrders();
  }, []);
  return (
    <Shell>
      <Container>
        <Title>Pedidos</Title>
        {orders.map((order) => (
          <AdminCard
            key={order.txn_id}
            name={order.name}
            credits={order.amount}
            txnId={order.txn_id}
            setOrders={setOrders}
          />
        ))}
      </Container>
    </Shell>
  );
}
