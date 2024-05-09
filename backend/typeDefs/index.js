import transactionTypeDefs from "./transactions.typeDefs.js";
import userTypeDefs from "./users.typeDefs.js";

import { mergeTypeDefs } from "@graphql-tools/merge";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs, transactionTypeDefs]);

export default mergedTypeDefs;