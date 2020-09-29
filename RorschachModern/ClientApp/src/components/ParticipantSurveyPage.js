import React, { useState } from "react";
import { StyledPage, StyledCard, StyledButton, StyledTextField, StyledImage } from "./subcomponents/StyledComponents";
import { useQuery, useMutation, gql } from "@apollo/client";
import { FormControl, MenuItem, Typography, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { LoadingCard, ErrorCard } from "./subcomponents/CommonCards";

const CREATE_PARTICIPANT_SUBMISSION = gql`
  mutation CreateParticipantSubmission($participantSubmission: InputParticipantSubmissionInput!) {
    createParticipantSubmission(participantSubmission: $participantSubmission) {
      id
      name
      ageRange
      occupation
      consent
      honest
      firstAttempt
      startTime
      endTime
      ipAddress
    }
  }
`;

const GET_BLOTCARDS = gql`
  query GetBlotCards {
    blotCards {
      id
      cardNumeral
      familiarName
      commonPerceptions
      questions {
        id
        prompt
        type
        choices {
          id
          text
          hrScore
        }
      }
      image
    }
  }
`;

export default ({ handleButton, handleError, participantId }) => {
  const [card1q1, setCard1q1] = useState(undefined);
  const [card1q2, setCard1q2] = useState(undefined);
  const [card2q1, setCard2q1] = useState(undefined);
  const [card2q2, setCard2q2] = useState(undefined);

  const [card3q1, setCard3q1] = useState(undefined);
  const [card3q2, setCard3q2] = useState(undefined);
  const [card4q1, setCard4q1] = useState(undefined);
  const [card4q2, setCard4q2] = useState(undefined);

  const [card5q1, setCard5q1] = useState(undefined);
  const [card5q2, setCard5q2] = useState(undefined);
  const [card6q1, setCard6q1] = useState(undefined);
  const [card6q2, setCard6q2] = useState(undefined);

  const [card7q1, setCard7q1] = useState(undefined);
  const [card7q2, setCard7q2] = useState(undefined);
  const [card8q1, setCard8q1] = useState(undefined);
  const [card8q2, setCard8q2] = useState(undefined);

  const [card9q1, setCard9q1] = useState(undefined);
  const [card9q2, setCard9q2] = useState(undefined);
  const [card10q1, setCard10q1] = useState(undefined);
  const [card10q2, setCard10q2] = useState(undefined);

  const [pageNumber, setPageNumber] = useState(1);

  const [createParticipantSubmission] = useMutation(CREATE_PARTICIPANT_SUBMISSION);
  const handleSubmit = e => {
    if (
      !(
        card1q1 &&
        card1q2 &&
        card2q1 &&
        card2q2 &&
        card3q1 &&
        card3q2 &&
        card4q1 &&
        card4q2 &&
        card5q1 &&
        card5q2 &&
        card6q1 &&
        card6q2 &&
        card7q1 &&
        card7q2 &&
        card8q1 &&
        card8q1 &&
        card9q1 &&
        card9q2 &&
        card10q1 &&
        card10q2
      )
    )
      return alert("A question was missed somewhere.");
    const submission = {
      id: parseInt(participantId),
      responses: [
        { questionId: parseInt(blotCards[0].questions[0].id), text: card1q1 },
        { questionId: parseInt(blotCards[0].questions[1].id), text: card1q2 },
        { questionId: parseInt(blotCards[1].questions[0].id), text: card2q1 },
        { questionId: parseInt(blotCards[1].questions[1].id), text: card2q2 },

        { questionId: parseInt(blotCards[2].questions[0].id), text: card3q1 },
        { questionId: parseInt(blotCards[2].questions[1].id), text: card3q2 },
        { questionId: parseInt(blotCards[3].questions[0].id), text: card4q1 },
        { questionId: parseInt(blotCards[3].questions[1].id), text: card4q2 },

        { questionId: parseInt(blotCards[4].questions[0].id), text: card5q1 },
        { questionId: parseInt(blotCards[4].questions[1].id), text: card5q2 },
        { questionId: parseInt(blotCards[5].questions[0].id), text: card6q1 },
        { questionId: parseInt(blotCards[5].questions[1].id), text: card6q2 },

        { questionId: parseInt(blotCards[6].questions[0].id), text: card7q1 },
        { questionId: parseInt(blotCards[6].questions[1].id), text: card7q2 },
        { questionId: parseInt(blotCards[7].questions[0].id), text: card8q1 },
        { questionId: parseInt(blotCards[7].questions[1].id), text: card8q2 },

        { questionId: parseInt(blotCards[8].questions[0].id), text: card9q1 },
        { questionId: parseInt(blotCards[8].questions[1].id), text: card9q2 },
        { questionId: parseInt(blotCards[9].questions[0].id), text: card10q1 },
        { questionId: parseInt(blotCards[9].questions[1].id), text: card10q2 },
      ],
    };
    console.log(submission);
    const id = createParticipantSubmission({
      variables: {
        participantSubmission: submission,
      },
    });
    console.log(id);
    handleButton();
  };
  const { loading, error, data } = useQuery(GET_BLOTCARDS);
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
  const incrementPage = () => {
    const number = pageNumber;
    setPageNumber(number + 1);
  };
  const blotCards = data.blotCards;
  console.log(blotCards);
  return (
    <StyledPage variant="outlined" elevation={3} style={{}}>
      {pageNumber === 1 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[0].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[0].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 2 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[0].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[0].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard1q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card1q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 3 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[0].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[0].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard1q2(e.target.value);
                }}
              >
                {blotCards[0].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card1q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 4 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[1].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[1].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 5 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[1].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[1].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard2q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card2q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 6 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[1].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[1].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard2q2(e.target.value);
                }}
              >
                {blotCards[1].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card2q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      /* Card 3 - 4 */
      {pageNumber === 7 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[2].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[2].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 8 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[2].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[2].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard3q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card3q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 9 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[2].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[2].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard3q2(e.target.value);
                }}
              >
                {blotCards[2].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card3q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 10 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[3].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[3].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 11 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[3].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[3].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard4q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card4q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 12 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[3].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[3].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard4q2(e.target.value);
                }}
              >
                {blotCards[3].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card4q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      /* Card 5 - 6 */
      {pageNumber === 13 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[4].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[4].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 14 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[4].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[4].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard5q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card5q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 15 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[4].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[4].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard5q2(e.target.value);
                }}
              >
                {blotCards[4].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card5q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 16 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[5].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[5].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 17 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[5].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[5].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard6q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card6q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 18 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[5].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[5].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard6q2(e.target.value);
                }}
              >
                {blotCards[5].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card6q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      /* Card 7 - 8 */
      {pageNumber === 19 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[6].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[6].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 20 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[6].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[6].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard7q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card7q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 21 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[6].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[6].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard7q2(e.target.value);
                }}
              >
                {blotCards[6].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card7q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 22 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[7].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[7].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 23 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[7].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[7].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard8q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card8q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 24 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[7].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[7].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard8q2(e.target.value);
                }}
              >
                {blotCards[7].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card8q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      /* Card 9 - 10 */
      {pageNumber === 25 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[8].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[8].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 26 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[8].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[8].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard9q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card9q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 27 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[8].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[8].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard9q2(e.target.value);
                }}
              >
                {blotCards[8].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card9q2) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 28 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[9].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <StyledImage src={blotCards[9].image}></StyledImage>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton color="primary" size="large" variant="contained" onClick={() => incrementPage()}>
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 29 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[9].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "space-around" }}>
            <Typography variant="body1">{blotCards[9].questions[0].prompt}</Typography>
            <StyledTextField
              multiline
              rows={5}
              variant="outlined"
              onChange={e => {
                setCard10q1(e.target.value);
              }}
            />
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <StyledButton
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                if (card10q1) incrementPage();
              }}
            >
              Next
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
      {pageNumber === 30 && (
        <React.Fragment>
          <StyledCard elevation={5} style={{ display: "flex", alignItems: "normal", justifyContent: "center" }}>
            <Typography variant="h6">{blotCards[9].cardNumeral}</Typography>
          </StyledCard>
          <StyledCard elevation={5} style={{ display: "flex", height: "inherit", justifyContent: "center" }}>
            <Typography variant="body1">{blotCards[9].questions[1].prompt}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                onChange={e => {
                  setCard10q2(e.target.value);
                }}
              >
                {blotCards[9].questions[1].choices.map((choice, index) => {
                  return <FormControlLabel key={"mc-" + pageNumber + "-" + index} value={choice.text} control={<Radio />} label={choice.text} />;
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
                if (card10q2) {
                  handleSubmit();
                }
              }}
            >
              Submit
            </StyledButton>
          </StyledCard>
        </React.Fragment>
      )}
    </StyledPage>
  );
};
