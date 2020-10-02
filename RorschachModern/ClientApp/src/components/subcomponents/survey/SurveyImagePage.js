import React from "react";
import { StyledCard, StyledButton, StyledImage } from "../../subcomponents/StyledComponents";
import { Typography } from "@material-ui/core";

export default ({blotCard, handleNextPage}) => {
  return (
    <React.Fragment>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <Typography variant="h6">{blotCard.cardNumeral}</Typography>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
        <StyledImage src={blotCard.image}></StyledImage>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <StyledButton
          color="primary"
          size="large"
          variant="contained"
          onClick={() => {
            handleNextPage();
          }}
        >
          Next
        </StyledButton>
      </StyledCard>
    </React.Fragment>
  );
};
