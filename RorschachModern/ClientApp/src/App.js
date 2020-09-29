import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./graphql/index";
import WelcomePage from "./components/WelcomePage";
import ParticipantInformationPage from "./components/ParticipantInformationPage";
import ParticipantSurveyPage from "./components/ParticipantSurveyPage";
import ThankYouPage from './components/ThankYouPage'
import { StyledGrid } from "./components/subcomponents/StyledComponents";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/index";

export default () => {
  const [onWelcomePage, setOnWelcomePage] = useState(true);
  const [onParticipantInformationPage, setOnParticipantInformationPage] = useState(false);
  const [onParticipantSurveyPage, setOnParticipantSurveyPage] = useState(false);
  const [onThankYouPage, setOnThankYouPage] = useState(false);
  const [onErrorPage, setOnErrorPage] = useState(undefined);
  const [participantId, setParticipantId] = useState(1);
  const [participantName, setParticipantName] = useState("Sean Tronsen");

  const handleChangeToWelcomePage = e => {
    resetPageHooks();
    setOnWelcomePage(true);
  };

  const handleChangeToInfoPage = e => {
    resetPageHooks();
    setOnParticipantInformationPage(true);
  };
  const handleChangeToSurveyPage = e => {
    resetPageHooks();
    setOnParticipantSurveyPage(true);
  };
  const handleChangeToThankYouPage = e => {
    resetPageHooks();
    setOnThankYouPage(true);
  };
  const handleChangeToErrorPage = e => {
    resetPageHooks();
  };
  const resetPageHooks = () => {
    setOnWelcomePage(false);
    setOnParticipantInformationPage(false);
    setOnParticipantSurveyPage(false);
    setOnThankYouPage(false);
    setOnErrorPage(undefined);
  };

  return (
    <ApolloProvider client={client}>
      <StyledGrid container direction="column" justify="center" alignItems="center">
        {onWelcomePage && <WelcomePage handleButton={handleChangeToInfoPage} />}
        {onParticipantInformationPage && <ParticipantInformationPage handleButton={handleChangeToSurveyPage} setParticipantId={setParticipantId} setParticipantName={setParticipantName} />}
        {onParticipantSurveyPage && <ParticipantSurveyPage handleButton={handleChangeToThankYouPage} handleError={handleChangeToErrorPage} participantId={participantId} />}
        {onThankYouPage && <ThankYouPage>This is the next page</ThankYouPage>}
        {onErrorPage && <div>This is the next page</div>}
      </StyledGrid>
    </ApolloProvider>
  );
};
