import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
 # types of properties you can call in graphql

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }


    enum Gender {

        # All fields inside of an enum should be uppercase 
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    # If there is an input type, same fields must be present as the type 

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]

    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input : FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
