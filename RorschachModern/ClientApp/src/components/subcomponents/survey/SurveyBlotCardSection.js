import React, { useState } from "react";
import { StyledPage } from "../StyledComponents";
import SurveyResponsePage from "./SurveyResponsePage";
import SurveyMultipleChoicePage from "./SurveyMultipleChoicePage";
import SurveyImagePage from "./SurveyImagePage";

export default ({ blotCard, page, addResponse, nextPage, nextSection }) => {
  const handleNextPage = () => {
    nextPage();
    if (page >= 2) nextSection();
  };

  const handleAddResponse = response => {
    if (!response) return;
    addResponse(response);
    handleNextPage();
  };

  return (
    <StyledPage>
      {page === 0 && <SurveyImagePage blotCard={blotCard} handleNextPage={handleNextPage} />}
      {page === 1 && <SurveyResponsePage blotCard={blotCard} handleAddResponse={handleAddResponse} />}
      {page === 2 && <SurveyMultipleChoicePage blotCard={blotCard} handleAddResponse={handleAddResponse} />}
    </StyledPage>
  );
};
