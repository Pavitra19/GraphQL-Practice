class Friend {
    constructor(id, { firstName, lastName, gender, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

// In memory database

const friendDatabase = {};

const resolvers = {
    // instead of manually returning friend here like before 
    // create a function or resolver that will allow us to get a friend once we have created something in our database. 

    getFriend: ({ id }) => {
        // return new friend with the id and the position as the id
        return new Friend(id, friendDatabase[id]);
    },

    createFriend: ({ input }) => {
        // use crypto to create an id with some random bytes and convert them to string 
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }

};

export default resolvers;