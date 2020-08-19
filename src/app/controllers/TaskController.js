import createTask from "../services/CreateTask";
import setQueuedTask from "../services/SetQueuedTask";

import Queue from "../lib/Queue";
class TaskController {
  async store(req, res) {
    const { endPoint, taskCallAt } = req.body;

    const Task = await createTask(endPoint, new Date(taskCallAt).toUTCString());
    const delay = new Date(Task.do_task).getTime() - new Date().getTime();

    await Queue.add("CallEndpoint", { Task }, delay);
    setQueuedTask(Task.id);
    return res.json(Task);
  }
}

export default new TaskController();
