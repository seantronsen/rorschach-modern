import { Grid, Paper, Card, Button, TextField, Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPage = styled(Paper)`
  background: #334;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledButton = styled(Button)``;

export const StyledCard = styled(Card)`
  background: #cfcfb0;
  box-shadow: 5px 10px;
  margin: 2%;
  min-height: 10%;
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const StyledTextField = styled(TextField)`
  margin: 3% 0 !important;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
