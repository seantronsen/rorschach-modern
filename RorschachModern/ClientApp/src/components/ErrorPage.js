import React from "react";
import { StyledPage, StyledCard, StyledButton } from "./subcomponents/StyledComponents";
import { ErrorCard } from "./subcomponents/CommonCards";
export default ({ handleButton }) => {
  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      <StyledCard elevation={5}>
        <ErrorCard />
      </StyledCard>
      <StyledCard elevation={5}>
        <StyledButton color="primary" size="large" variant="contained" onClick={handleButton}>
          Back to the Home Page
        </StyledButton>
      </StyledCard>
    </StyledPage>
  );
};
