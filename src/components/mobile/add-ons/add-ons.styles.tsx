import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
   height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 6vw 6vw;
`;

export const TitleWrapper = styled(Box)`
 
`;

export const Title = styled.p`
  font-size: 6.5vw;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
`;

export const Subtitle = styled.p`
 margin-top: 6px;
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 4vw;
`;

export const IndividualCardWrapper = styled(Box)`
  margin-top: 16px;

  padding: 0;
  display: flex;
  width: 100%;
`;

export const CardsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 24px;
`;

export const GoBack = styled(Button).attrs({
  sx: {
    textTransform: "capitalize",
    color: "hsl(231, 11%, 63%)",
    fontWeight: 600,
  },
})``;

export const NextStep = styled(Button).attrs({
  sx: {
    textTransform: "capitalize",
    fontSize: 14,

    paddingRight: 2,
    paddingLeft: 2,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 2,
    ":hover": { backgroundColor: "hsl(243, 100%, 62%)" },
    backgroundColor: "hsl(213, 96%, 18%)",
    color: "white",
  },
})``;
