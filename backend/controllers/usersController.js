const userModel = require("../schemas/user");

module.exports = {
  async createUser(req, res) {
    try {
      const { name, unique_name } = req.body;

      if (!name || !unique_name) {
        return res.status(400).end();
      }

      const userExists = await userModel.findOne({
        email: unique_name,
      });

      console.log(userExists);

      if (userExists) {
        return res.status(400).end();
      }

      const user = await userModel.create({
        username: name,
        email: unique_name,
      });

      console.log(user);
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  },
};
