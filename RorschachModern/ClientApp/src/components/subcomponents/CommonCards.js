import React from "react";
import { StyledCard } from "./StyledComponents";

export const LoadingCard = () => <StyledCard elevation={5}>Loading.... | Fetching data from the server</StyledCard>;

export const ErrorCard = () => <StyledCard elevation={5}>Error | There seems to be a problem. Email sean.tronsen@gmail.com to report the issue.  </StyledCard>;
