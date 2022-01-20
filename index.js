const { ApolloServer, gql } = require("apollo-server");
// typedefinations
const typeDefs = gql`
  type Query {
    # object types
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

// functions that is returning the stings of type defs
const resolvers = {
  Query: {
    products: () => {
      return [
        {
          name: "Bike",
          description: "This is a mountain bike.",
          quantity: 10,
          price: 29.2,
          onSale: true,
        },
      ];
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
