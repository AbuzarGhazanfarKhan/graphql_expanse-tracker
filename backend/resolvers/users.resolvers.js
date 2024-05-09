// const { Query } = require("mongoose");
import {users} from "../dummyData/dummyData.js"

const userResolver = {
  Query: {
    users: () => {
      console.log("object");
      return users;
    },
    user: (_, args) => {
      console.log(args);
   let user1 = users.find((user) => user._id === args.userId);
      let user = users.find((u) => u._id === args.userId);
console.log(user1);
      return user;
    },
  },

  Mutation: {},
};
export default userResolver