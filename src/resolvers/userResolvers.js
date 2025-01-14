const userService = require('../services/userService');

const userResolvers = {
  Query: {
    users: async () => {

      return await userService.getUsers();
    },
  },
  Mutation: {
    createUser: async (_, args) => await userService.createUser(args),
    updateUser: async (_, args) => await userService.updateUser(args),
    deleteUser: async (_, { _id }) => await userService.deleteUser(_id),
  },
};

module.exports = userResolvers;