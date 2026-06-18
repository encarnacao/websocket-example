import http from "http";
import { app } from "./app.js";
import { initWebsocket } from "./websocket.js";

export const server = http.createServer(app);

initWebsocket(server);

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
