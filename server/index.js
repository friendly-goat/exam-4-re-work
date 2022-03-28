const express = require("express");
const cors = require("cors");

const {
  getFortune,
  getCompliment,
  getUsers,
  addUser,
  deleteUsr,
  reIndexFunc,
  genNewUsr,
  changeAnimal
} = require("./controller/controller1.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get("/api/users", getUsers)
app.post("/api/users", addUser)
app.delete("/api/users/:id", deleteUsr)
app.get("/api/users-reID", reIndexFunc)
app.post("/api/randomUsr", genNewUsr)
app.put("/api/change/:index",changeAnimal)

app.listen(4000, () => console.log("Server running on 4000"));
