import mongoose from 'mongoose';
import { Friends, Aliens } from './dbConnectors';

// resolver map
export const resolvers = {
    // instead of manually returning friend here like before 
    // create a function or resolver that will allow us to get a friend once we have created something in our database. 

    Query: {
        getOneFriend: (root, { id }) => {
            return new Promise((resolve, object) => {
                // return friend
                Friends.findById(id, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                });
            });
        },
        getAliens: () => {
            return Aliens.findAll();
        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            // assigned directly from the database 
            newFriend.id = newFriend._id;

            // object will come from promises 

            // mongo db

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                })

            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, object) => {
                Friends.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve('Successfully deleted friend')
                })
            })
        }
    },
};