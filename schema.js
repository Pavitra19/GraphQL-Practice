import { buildSchema } from 'graphql';

const schema = buildSchema(`
 # types of properties you can call in graphql

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        language: String
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    # If there is an input type, same fields must be present as the type 

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        age: Int
        language: String
        email: String

    }

    type Mutation {
        createFriend(input : FriendInput): Friend
    }
`)

export default schema;
