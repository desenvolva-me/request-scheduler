import "dotenv/config";
import express from "express";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.use("/admin/queues", BullBoard.UI);

const user = {
  name: "a",
  email: "nicoals",
  password: "a",
};
app.listen(3333, async () => {
  console.log("Server running on localhost:3333");
  await Queue.add("UserReport", { user });
});