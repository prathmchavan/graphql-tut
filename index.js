import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    games() {
      return db.games
    },

    authors() {
      return db.authors
    },

    reviews() {
      return db.reviews
    },
    review(_,args){
        return  db.reviews.find((review)=> review.id ===args.id)
    },

    game(_,args){
        return  db.games.find((game)=> game.id ===args.id)
    },

    author(_,args){
        return  db.authors.find((author)=> author.id ===args.id)
    },



  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
