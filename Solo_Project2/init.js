import app from "./app";

const PORT = 8000;

function serverListening(req, res) {
  console.log("8000 Server ready✅");
}

app.listen(PORT, serverListening);
