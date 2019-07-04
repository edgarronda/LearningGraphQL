import {buildSchema } from 'graphql';

//create object.
const schema = buildSchema(`
    type Friend{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        emails: String
        contacts: [Contact]
    }

    type Contact{
        firstName: String
        lastName: String
    }

    enum Gender{
        MALE
        FEMAIL
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput{
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        emails: String
        contacts: [ContactInput]
    }

    input ContactInput{
        firstName: String
        lastName: String
    }

    type Mutation{
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;