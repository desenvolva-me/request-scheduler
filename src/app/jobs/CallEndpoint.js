export default {
  key: "CallEndpoint",
  options: {},
  async handle({ data }) {
    const { Task, delay } = data;

    console.log(`Task: ${Task}\n${delay}`);
  },
};
