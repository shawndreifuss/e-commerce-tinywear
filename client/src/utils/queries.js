// utils/queries.js
import { gql } from '@apollo/client';



export const QUERY_PROFILES = gql`
  query users {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query user($userId: ID!) {
    profile(userId: $userId) {
      _id
      email
    }
}
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCT = gql`
query Query($productId: ID!) {
  product(productId: $productId) {
    _id
    name
    img
    gender
    price
    description
    payBtn
  }
}
`;

export const QUERY_SHIRTS = gql`
query Query($categoryId: ID!) {
  products(categoryId: $categoryId) {
    _id
    name
    img
    gender
    category {
      _id
    }
    price
    description
    payBtn
  }
}`

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          img
          gender
          category {
            name
          }
          price
          description
          payBtn
        }
      }
    }
  }
`;





export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      img
      gender
      category
      price
      description
      payBtn
      
    }
  }
`;