import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL test!');
});

//Return the function 
const root = { hello: () => "Hi, test. "};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8090, () => console.log('Server Running on localhost:8090/graphql'));