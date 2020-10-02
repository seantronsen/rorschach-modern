import React, { useState } from "react";
import { StyledCard, StyledButton, StyledTextField } from "../../subcomponents/StyledComponents";
import { Typography } from "@material-ui/core";
import { ResponseFactory } from "../../../common/index";

export default ({ blotCard, handleAddResponse }) => {
  const [response, setResponse] = useState(undefined);
  return (
    <React.Fragment>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <Typography variant="h6">{blotCard.cardNumeral}</Typography>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
        <Typography variant="body1">{blotCard.questions[0].prompt}</Typography>
        <StyledTextField
          multiline
          rows={5}
          variant="outlined"
          onChange={e => {
            setResponse(e.target.value);
          }}
        />
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <StyledButton
          color="primary"
          size="large"
          variant="contained"
          onClick={() => {
            if (response) handleAddResponse(ResponseFactory(parseInt(blotCard.questions[0].id, 10), response));
          }}
        >
          Next
        </StyledButton>
      </StyledCard>
    </React.Fragment>
  );
};
