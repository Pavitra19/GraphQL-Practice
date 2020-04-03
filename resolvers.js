class Friend {
    constructor(id, { firstName, lastName, gender, age, language, email, contacts }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
        this.contacts = contacts;
    }
}

// In memory database

const friendDatabase = {};

// resolver map
export const resolvers = {
    // instead of manually returning friend here like before 
    // create a function or resolver that will allow us to get a friend once we have created something in our database. 

    Query: {

        getFriend: ({ id }) => {
            // return new friend with the id and the position as the id
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation: {
        createFriend: ({ input }) => {
            // use crypto to create an id with some random bytes and convert them to string 
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDatabase[id] = input;
            return new Friend(id, input);
        },
    },

};