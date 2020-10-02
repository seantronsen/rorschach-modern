import { gql } from "@apollo/client";

export const CREATE_PARTICIPANT_SUBMISSION = gql`
  mutation CreateParticipantSubmission($participantSubmission: InputParticipantSubmissionInput!) {
    createParticipantSubmission(participantSubmission: $participantSubmission) {
      id
      name
      ageRange
      occupation
      consent
      honest
      firstAttempt
      startTime
      endTime
      ipAddress
    }
  }
`;


export const CREATE_PARTICIPANT = gql`
  mutation CreateParticipant($participant: InputParticipantInput!) {
    createParticipant(participant: $participant) {
      id
      name
      ageRange
      occupation
      consent
      honest
      firstAttempt
      startTime
      endTime
      ipAddress
    }
  }
`;