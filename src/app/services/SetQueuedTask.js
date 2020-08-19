import db from "../../database/connection";

export default async function setQueuedTask(taskId) {
  await db("Task").where("id", taskId).update({ queued: true });
}
