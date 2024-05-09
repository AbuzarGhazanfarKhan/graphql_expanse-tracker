const userTypeDef = `#graphql
type User{
    _id:ID!
    username:String!
    name:String!
    password:String!
    profilePicture: String 
    gender: String!
}

type Query{
    authUser:User
    users: [User!]
    user(userId: ID!): User

}

type Mutation{
    signUp(input:signUpInput!):User
    login(input:loginInput!):User
    logout:logoutResponse
}



input signUpInput{
    userName: String!
    name:String!
    password:String!
    gender:String!
}
input loginInput{
    userName: String!
    password:String!
}

type logoutResponse{
    message:String! 
}
`;


export default userTypeDef