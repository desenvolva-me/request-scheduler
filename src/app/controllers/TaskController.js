import createTask from "../services/CreateTask";
class TaskController {
  async store(req, res) {
    const { endPoint, taskCallAt } = req.body;
    const Task = await createTask(endPoint, new Date(taskCallAt).toUTCString());
    return res.json(Task);
  }
}

export default new TaskController();
