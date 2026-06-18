"use client";

import { Container, Shell, Title } from "../../css/admin";
import AdminCard from "../../components/admin-card";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const socketRef = useRef(null);
  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_API_URL, {
      query: { admin: true },
    });
    const socket = socketRef.current;
    socket.on("adminUpdate", (data) => {
      console.log("Atualização recebida do servidor:", data);
      setOrders(data.transactions);
    });
    return () => {
      socket.disconnect();
    };
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
            socket={socketRef.current}
          />
        ))}
      </Container>
    </Shell>
  );
}
