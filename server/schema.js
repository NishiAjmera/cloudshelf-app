import { gql } from "apollo-server-express";
import casual from "casual";

let products = [];
casual.define('product', () => {
  return {
    id: casual.integer,
    name: casual.name,
    price: casual.integer,
    description: casual.description
  };
});

for (var i = 0; i < 2000; ++i) {
  products.push(casual.product);
}

export const typeDefs =  gql`
type Query {
  products(offset: Int, limit: Int): [Product]
}

type Product {
  id: Int
  name: String 
  price: String
  description: String
}
`
export const resolvers = {
  Query: {
    products: (parents, args) => {
    if(args.offset && (!args.limit || args.limit == 0)) {
      return products.slice(0,args.offset);
    } 
    if(args.offset && args.limit) {
      return products.slice(args.limit, args.limit+args.offset);
    }
    return products;
    },
  },
};

