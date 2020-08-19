export default {
  key: "UserReport",
  options: {
    delay: 0,
  },
  async handle({ data }) {
    const { user } = data;

    console.log(user);
  },
};
