import React from "react";
import { StyledPage, StyledCard, StyledButton } from "./subcomponents/StyledComponents";
import { Typography } from "@material-ui/core";
export default ({ handleButton, participantName }) => {
  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      <StyledCard elevation={5}>
        <Typography variant="h4">{(participantName ? `${participantName}, thank` : "Thank") + " you for your participation"}</Typography>
      </StyledCard>
      <StyledCard elevation={5}>
        <StyledButton color="primary" size="large" variant="contained" onClick={handleButton}>
          Back to the Home Page
        </StyledButton>
      </StyledCard>
    </StyledPage>
  );
};
