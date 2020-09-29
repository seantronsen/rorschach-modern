import React from "react";
import { StyledPage, StyledCard, StyledButton } from "./subcomponents/StyledComponents";
import { Typography } from "@material-ui/core";
export default ({ handleButton }) => {
  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      <StyledCard elevation={5}>
        <Typography variant="h4">Thank you for your participation </Typography>
      </StyledCard>
    </StyledPage>
  );
};
