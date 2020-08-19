import db from "../../database/connection";

export default async function createTask(taskEndPoint, callTaskDate) {
  const insertedTasks = await db("Task")
    .insert({
      endPoint: taskEndPoint,
      do_task: callTaskDate,
    })
    .returning(["id", "endPoint", "do_task"]);

  const Task = insertedTasks[0];
  return Task;
}
