import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { getEnabledCategories } from 'trace_events';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL test!');
});

//Uses for new Friend creation.
class Friend{
    constructor(id, {firstName, lastName, gender, language, email }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const friendDatabase = {};

//Return the function(resolver) 
const root = { 
    friend: () => {
        return{
            "id": 11111,
            "firstName": "Edgar",
            "lastName": "Ronda",
            "gender": "Male",
            "language": "English",
            "emails": [
                {email: "me@mail.com"},
                {email: "me2@mail.com"}
            ],
        }
    },

    //Friend Resolver.
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }

};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8090, () => console.log('Server Running on localhost:8090/graphql'));