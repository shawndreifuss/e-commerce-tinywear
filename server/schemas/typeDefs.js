const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Checkout {
    session: ID
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    img: String
    gender: String
    category: String
    price: Float
    description: String
    payBtn: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  

  type User {
    _id: ID
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(productId: ID!): Product

    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
