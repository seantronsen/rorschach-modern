import { gql } from "@apollo/client";

export const GET_BLOTCARDS = gql`
  query GetBlotCards {
    blotCards {
      id
      cardNumeral
      familiarName
      commonPerceptions
      questions {
        id
        prompt
        type
        choices {
          id
          text
          hrScore
        }
      }
      image
    }
  }
`;


export const GET_SURVEYS = gql`
    query GetSurvey {
      surveys {
        id
        name
        description
        purpose
      }
    }
  `;