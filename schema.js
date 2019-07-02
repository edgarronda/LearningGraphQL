import {buildSchema } from 'graphql';

//create object.
const schema = buildSchema(`
    type Query {
        hello: String
    }
    `)

export default schema;