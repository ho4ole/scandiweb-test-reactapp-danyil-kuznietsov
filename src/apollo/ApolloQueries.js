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
  query GetProducts {
    category {
      name
      products{
        id
        name
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
