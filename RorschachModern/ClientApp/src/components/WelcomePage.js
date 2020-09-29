import React from "react";
import { StyledPage, StyledCard, StyledButton } from "./subcomponents/StyledComponents";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "@material-ui/core";
import { LoadingCard, ErrorCard } from "./subcomponents/CommonCards";
export default ({ handleButton }) => {
  const GET_SURVEYS = gql`
    query GetSurvey {
      surveys {
        id
        name
        description
        purpose
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_SURVEYS);

  if (loading)
    return (
      <StyledPage variant="outlined" elevation={3} style={{}}>
        <LoadingCard />
      </StyledPage>
    );

  if (error)
    return (
      <StyledPage variant="outlined" elevation={3} style={{}}>
        <ErrorCard />
      </StyledPage>
    );

  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      <StyledCard elevation={5}>
        <Typography variant="h4">{data?.surveys[0]?.name} </Typography>
        <Typography variant="h6">Created by: Sean Tronsen</Typography>
      </StyledCard>
      <StyledCard elevation={5}>
        <Typography variant="body1">{data?.surveys[0]?.description}</Typography>
        <Typography variant="body2">{data?.surveys[0]?.purpose}</Typography>
      </StyledCard>
      <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
        <StyledButton color="primary" size="large" variant="contained" onClick={handleButton}>
          Participate in Test
        </StyledButton>
      </StyledCard>
    </StyledPage>
  );
};
