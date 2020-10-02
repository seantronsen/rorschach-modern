import React, {useState} from "react";
import { StyledCard, StyledButton } from  "../../subcomponents/StyledComponents";
import { FormControl, Typography, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import {ResponseFactory} from '../../../common/index'

export default ({blotCard, handleAddResponse}) => {
  const [response, setResponse] = useState(undefined);
  return (
    <React.Fragment>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <Typography variant="h6">{blotCard.cardNumeral}</Typography>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
        <Typography variant="body1">{blotCard.questions[1].prompt}</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            onChange={e => {
              setResponse(e.target.value);
            }}
          >
            {blotCard.questions[1].choices.map((choice, index) => {
              return <FormControlLabel key={"mc-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
            })}
          </RadioGroup>
        </FormControl>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <StyledButton
          color="primary"
          size="large"
          variant="contained"
          onClick={() => {
            if (response) handleAddResponse(ResponseFactory(parseInt(blotCard.questions[1].id, 10), response));
          }}
        >
          Next
        </StyledButton>
      </StyledCard>
    </React.Fragment>
  );
};
