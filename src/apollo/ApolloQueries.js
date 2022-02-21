import {gql} from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    currencies {
      label
      symbol
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      }
  }
`;

export const PRODUCTS = gql`
  query GetProducts ($categoryInput: CategoryInput!) {
    category (input: $categoryInput) {
      name
      products{
        id
        category
        name
         attributes {
          id
        }
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
      }
  }
`;

export const PRODUCT = gql`
      query GetProduct ($id: String!) {
      product (id: $id){
        id
        name
        inStock
        gallery
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
  }
`;
