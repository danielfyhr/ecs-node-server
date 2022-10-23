import { createServer } from "http";

const server = createServer((req, res) => {
  console.log("Incoming request", { url: req.url, method: req.method });
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.write(JSON.stringify({ message: "Hamburger Service" }));
  res.end();
});

const config = {
  host: "0.0.0.0",
  port: 1337,
};

server.listen(config.port, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
