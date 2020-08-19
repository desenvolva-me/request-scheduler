import HttpClient from "../services/HttpRequest";
import db from "../../database/connection";
export default {
  key: "CallEndpoint",
  options: {},
  async handle({ data }) {
    const { Task } = data;
    try {
      await HttpClient.get(Task.endPoint);
    } catch {
      //
    } finally {
      await db("Task").where("id", Task.id).update({ done: true });
    }
  },
};
