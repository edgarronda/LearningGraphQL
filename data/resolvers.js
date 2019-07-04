import mongoose from 'mongoose';
import {friends} from './dbConnectors';
import { rejects } from 'assert';

// Resolver map.
export const resolvers = { 
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation:{
        createFriend: (root, {input}) => {
          const newFriend = new friends({
              firstName: input.firstName,
              lastName: input.lastName,
              gender: input.gender,              
              age: input.age,
              language: input.language,
              email: input.email,
              contacts: input.contacts
          });

          newFriend.id = newFriend._id;

          return new Promise((resolve, object) =>{
              newFriend.save((err) => {
                  if(err) rejects(err)
                  else resolve(newFriend)
              })
          })
        },
    },
};