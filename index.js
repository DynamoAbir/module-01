const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("simple node server running");
});

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "abir", email: "sabana@gmail.com" },
  { id: 2, name: "Sabana", email: "sabana@gmail.com" },
  { id: 3, name: "John", email: "john@gmail.com" },
  { id: 4, name: "Emily", email: "emily@gmail.com" },
  { id: 5, name: "Alex", email: "alex@gmail.com" },
  { id: 6, name: "Sophia", email: "sophia@gmail.com" },
  { id: 7, name: "Daniel", email: "daniel@gmail.com" },
  { id: 8, name: "Lily", email: "lily@gmail.com" },
  { id: 9, name: "Ethan", email: "ethan@gmail.com" },
  { id: 10, name: "Olivia", email: "olivia@gmail.com" },
];
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Simple node server running on port ${port}`);
});
