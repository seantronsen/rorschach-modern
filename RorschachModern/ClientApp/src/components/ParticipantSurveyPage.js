import React, { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { StyledPage } from "./subcomponents/StyledComponents";
import { LoadingCard } from "./subcomponents/CommonCards";
import SurveyBlotCardSection from "./subcomponents/survey/SurveyBlotCardSection";
// Non components
import { CREATE_PARTICIPANT_SUBMISSION } from "../graphql/mutations";
import { GET_BLOTCARDS } from "../graphql/queries";

export default ({ handleButton, handleError, participantId }) => {
  const [responses, setResponses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [createParticipantSubmission] = useMutation(CREATE_PARTICIPANT_SUBMISSION);
  const { loading, error, data } = useQuery(GET_BLOTCARDS);
  const [sectionPage, setSectionPage] = useState(0);

  useEffect(() => {
    if (pageNumber > 9) {
      handleSubmit();
    }
  }, [pageNumber]);

  const handleSubmit = () => {
    createParticipantSubmission({
      variables: { participantSubmission: { id: participantId, responses } },
    });
    handleButton();
  };
  const nextSection = () => {
    incrementPage();
  };

  const addResponse = response => setResponses([...responses, response]);

  const incrementPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const nextSectionPage = () => {
    if (sectionPage < 2) {
      setSectionPage(sectionPage + 1);
    } else {
      setSectionPage(0);
    }
  };

  if (loading)
    return (
      <StyledPage variant="outlined" elevation={3} style={{}}>
        <LoadingCard />
      </StyledPage>
    );
  if (error) handleError();
  const { blotCards } = data;

  return (
    <React.Fragment>
      {pageNumber < blotCards.length && <SurveyBlotCardSection blotCard={blotCards[pageNumber]} page={sectionPage} nextPage={nextSectionPage} addResponse={addResponse} nextSection={nextSection} />}
    </React.Fragment>
  );
};
