// const { Query } = require("mongoose");
import { transactions } from "../dummyData/dummyData.js";

const transactionResolver = {
  Query: {
    transactions: () => {
      return transactions;
    },

    transaction: (_,args)=>{
console.log(args.transactionId);
// console.log(
//   transactions.find((t) => {
//      t._id === args.transactionId;
//   })
// );
const transaction = transactions.find((t) => t._id === args.transactionId);

      return transaction
    }
  },

  Mutation: {},
};
export default transactionResolver;
