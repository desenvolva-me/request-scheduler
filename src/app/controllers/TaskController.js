import createTask from "../services/CreateTask";
import setQueuedTask from "../services/SetQueuedTask";

import Queue from "../lib/Queue";
class TaskController {
  isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  async store(req, res) {
    const { endPoint, callTaskAt } = req.body;

    if (new TaskController().isValidHttpUrl(endPoint)) {
      const Task = await createTask(
        endPoint,
        new Date(callTaskAt).toUTCString()
      );

      const delay = new Date(Task.do_task).getTime() - new Date().getTime();

      await Queue.add("CallEndpoint", { Task }, delay);
      await setQueuedTask(Task.id);

      return res.json(Task);
    }

    return res.sendStatus(401);
  }
}

export default new TaskController();
