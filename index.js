const { ApolloServer, gql } = require("apollo-server");
// typedefinations
const typeDefs = gql`
  type Query {
    #   scalar types
    # types of scalar types (int,float,string,bool)
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

// functions that is returning the stings of type defs
const resolvers = {
  Query: {
    hello: () => {
      return "Hello";
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 254.25;
    },
    isCool: () => {
      return false;
    },
  },
};

// server instances
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then((url) => {
  console.log("server is ready at", url);
});
