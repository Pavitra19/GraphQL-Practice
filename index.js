import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL is amazing!");
});

const root = { hello: () => "Hello World" };
app.use('/graphql', graphqlHTTP({
    // ES6 short form is typing just schema
    schema: schema,
    rootValue: root,
    graphiql: true,

}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));