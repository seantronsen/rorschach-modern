import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/index";
import ErrorPage from "./components/ErrorPage";
import ParticipantSurveyPage from "./components/ParticipantSurveyPage";
import ParticipantInformationPage from "./components/ParticipantInformationPage";
import React, { useState } from "react";
import { StyledContainer } from "./components/subcomponents/StyledComponents";
import ThankYouPage from "./components/ThankYouPage";
import WelcomePage from "./components/WelcomePage";
import "./graphql/index";

export default () => {
  const [onWelcomePage, setOnWelcomePage] = useState(true);
  const [onParticipantInformationPage, setOnParticipantInformationPage] = useState(false);
  const [onParticipantSurveyPage, setOnParticipantSurveyPage] = useState(false);
  const [onThankYouPage, setOnThankYouPage] = useState(false);
  const [onErrorPage, setOnErrorPage] = useState(undefined);
  const [participantId, setParticipantId] = useState(undefined);
  const [participantName, setParticipantName] = useState(undefined);
  const resetPageHooks = () => {
    setOnWelcomePage(false);
    setOnParticipantInformationPage(false);
    setOnParticipantSurveyPage(false);
    setOnThankYouPage(false);
    setOnErrorPage(undefined);
  };

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
    setOnErrorPage(true);
  };

  return (
    <ApolloProvider client={client}>
      <StyledContainer>
        {onWelcomePage && <WelcomePage handleButton={handleChangeToInfoPage} />}
        {onParticipantInformationPage && <ParticipantInformationPage handleButton={handleChangeToSurveyPage} setParticipantId={setParticipantId} setParticipantName={setParticipantName} />}
        {onParticipantSurveyPage && <ParticipantSurveyPage handleButton={handleChangeToThankYouPage} handleError={handleChangeToErrorPage} participantId={participantId} />}
        {onThankYouPage && <ThankYouPage participantName={participantName} handleButton={handleChangeToWelcomePage} />}
        {onErrorPage && <ErrorPage handleButton={handleChangeToWelcomePage} />}
      </StyledContainer>
    </ApolloProvider>
  );
};
