import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL test!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(8090, () => console.log('Server Running on localhost:8090/graphql'));