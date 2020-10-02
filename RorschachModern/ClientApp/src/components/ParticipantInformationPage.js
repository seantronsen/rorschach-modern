import React, { useState } from "react";
import { StyledPage, StyledCard, StyledButton, StyledTextField } from "./subcomponents/StyledComponents";
import { useMutation } from "@apollo/client";
import { MenuItem, Typography } from "@material-ui/core";
import { CREATE_PARTICIPANT } from "../graphql/mutations";

export default ({ handleButton, setParticipantName, setParticipantId }) => {
  const [name, setName] = useState(undefined);
  const [ageRange, setAgeRange] = useState("");
  const [occupation, setOccupation] = useState(undefined);
  const [firstAttempt, setFirstAttempt] = useState(false);
  const [firstAttemptPretty, setFirstAttemptPretty] = useState("No");
  const [honest, setHonest] = useState(false);
  const [honestPretty, setHonestPretty] = useState("No");
  const [consent, setConsent] = useState(false);
  const [consentPretty, setConsentPretty] = useState("No");
  const [createParticipant] = useMutation(CREATE_PARTICIPANT);

  const handleSubmit = async e => {
    if (!ageRange) return alert("Age Range is a required field.");
    if (!occupation) return alert("Occupation is a required field");
    if (!consent) return alert("Please give your consent through the corresponding consent field before continuing.");

    const { data } = await createParticipant({
      variables: { participant: { honest, firstAttempt, consent, ageRange, name, occupation } },
    });
    if (!data) return alert("An error has occurred during submission. Please contact developer by email: sean.tronsen@gmail.com");
    setParticipantName(name);
    setParticipantId(parseInt(data.createParticipant.id, 10));
    handleButton();
  };

  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <Typography variant="h4">Participant Information</Typography>
        <Typography variant="h6">Name is not required</Typography>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-between" }}>
        <StyledTextField label="Full Name (Optional)" variant="outlined" onChange={e => setName(e.target.value)} />
        <StyledTextField label="Age Range (years)" select variant="outlined" value={ageRange} onChange={e => setAgeRange(e.target.value)}>
          <MenuItem value=""></MenuItem>
          <MenuItem value="Less than 18">Less than 18</MenuItem>
          <MenuItem value="18 - 24">18 - 24</MenuItem>
          <MenuItem value="25 - 30">25 - 30</MenuItem>
          <MenuItem value="30 - 36">30 - 36</MenuItem>
          <MenuItem value="36 - 42">36 - 42</MenuItem>
          <MenuItem value="42 - 48">42 - 48</MenuItem>
          <MenuItem value="49 - 54">49 - 54</MenuItem>
          <MenuItem value="55 - 60">55 - 60</MenuItem>
          <MenuItem value="60 - 65">60 - 65</MenuItem>
          <MenuItem value="Greater than 65">Greater than 65</MenuItem>
        </StyledTextField>
        <StyledTextField label="Occupation or Major" variant="outlined" onChange={e => setOccupation(e.target.value)} />
        <StyledTextField
          label="First Time"
          value={firstAttemptPretty}
          select
          variant="outlined"
          onChange={e => {
            const value = e.target.value;
            if (value === "No") setFirstAttempt(false);
            if (value === "Yes") setFirstAttempt(true);
            setFirstAttemptPretty(value);
          }}
        >
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
        </StyledTextField>
        <StyledTextField
          label="Pledge Honesty"
          value={honestPretty}
          variant="outlined"
          select
          onChange={e => {
            const value = e.target.value;
            if (value === "No") setHonest(false);
            if (value === "Yes") setHonest(true);
            setHonestPretty(value);
          }}
        >
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
        </StyledTextField>
        <StyledTextField
          label="Consent"
          value={consentPretty}
          variant="outlined"
          select
          onChange={e => {
            const value = e.target.value;
            if (value === "No") setConsent(false);
            if (value === "Yes") setConsent(true);
            setConsentPretty(value);
          }}
        >
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
        </StyledTextField>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <StyledButton color="primary" size="large" variant="contained" onClick={handleSubmit}>
          Start Survey
        </StyledButton>
      </StyledCard>
    </StyledPage>
  );
};
