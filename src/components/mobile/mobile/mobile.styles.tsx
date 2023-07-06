import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #ecf3fd;
`;

export const ImageWrapper = styled(Box)`
 
  margin: 0px;
  padding: 0px;
  max-width: 900px;
  position: relative;
  justify-content: center;
  display: flex;
  
`;

export const ContentSeparator = styled(Box)`
  background-color: red;
  width: 100%;
`;

export const CardWrapper = styled(Box)`
  background-color: white;
  top: 26vw;
  display: flex;
  width: 92vw;
  border-radius: 8px;
  position: absolute;
`;

export const StepsWrapper = styled(Box)`
  position: absolute;
  top: 6vw;
  display: flex;
`;

export const StepWrapper = styled(Box)<{ hasPadding: boolean }>`
  display: flex;
  width: 100%;
  margin-right: ${(props) => (props.hasPadding ? "5vw" : "0px")};
`;

export const ButtonsWrapper = styled(Box)<{ hasGoBack: boolean }>`
  margin-top: 68vh;
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.hasGoBack ? "space-between" : "flex-end"};
  padding: 16px;
  background-color: white;
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
