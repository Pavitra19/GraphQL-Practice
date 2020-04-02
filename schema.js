import { buildSchema } from 'graphql';

const schema = buildSchema(`
 # types of properties you can call in graphql

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]! #! makes it mandatory 
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`)

export default schema;
