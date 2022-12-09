import express  from "express";

import characterList from "./data/characterList.js"

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/api/characterList", (req, res) => {
  console.log('returning:');
  console.log(characterList);
  res.json(characterList);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// For any other request, let React handle it.
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});