const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = JSON.parse(fs.readFileSync("users.json"));
const updateFile = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users));
};

// 1. Read All
app.get("/", (req, res) => {
  console.log(users)
  res.json({ data: users });
});

// 2. Read One
app.get("/:index", (req, res) => {
  const index = req.params.index;
  console.log(users)
  res.json({ data: users[index] });
});

// 3. Create
app.post("/", (req, res) => {
  users.push(req.body);
  console.log(users)
  updateFile(users);
  res.json({ msg: "User created successfully" });
});

// 4. Delete
app.delete("/:index", (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);
  console.log(users)
  updateFile(users);
  res.json({ msg: "User deleted successfully" });
});

// 5. Update
app.put("/:index", (req, res) => {
  const index = req.params.index;
  const user = users[index];
  const { name, email, password } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  console.log(users)
  updateFile(users);
  res.json({ msg: "User updated successfully" });
});

app.listen(8000);
