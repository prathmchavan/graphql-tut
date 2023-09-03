export const typeDefs = `#graphql

     type Game {
        id: ID!
        title: String!
        platform: [String!]!
     }
     
     typs Review{

        id:ID!
        rating: INT!
        content: String! 

     }

     type Author{
        id:ID!
        name: String!
        verified: Boolean!
     }

     type Query {
            reviews:[Review]
            games:[Game]
            authors:[Author]
     }

`