import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL test!');
});

app.listen(8090, () => console.log('Server Running on localhost:8090/graphql'));