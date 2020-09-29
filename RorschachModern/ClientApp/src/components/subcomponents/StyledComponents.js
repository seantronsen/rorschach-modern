import { Grid, Paper, Card, Button, Divider, FormControl, FormLabel, RadioGroup, Radio, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPage = styled(Paper)`
  background: #334;
  width: 500px;
  height: 800px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  max-height: 75%
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const StyledTextField = styled(TextField)`
  margin: 1% 0;
`;
