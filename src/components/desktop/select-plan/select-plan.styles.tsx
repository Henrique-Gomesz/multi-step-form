import { styled } from "styled-components";
import { Box, Switch as BaseSwitch, Button } from "@mui/material";

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TitleWrapper = styled(Box)`
  margin-top: 36px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
`;

export const Subtitle = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 15px;
`;

export const CardsWrapper = styled(Box)`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SwitchWrapper = styled(Box)`
  margin-top: 32px;
  background-color: #f8f9fe;
  -webkit-box-shadow: 10px 20px 30px 0px rgba(248, 249, 254, 1);
  -moz-box-shadow: 10px 20px 30px 0px rgba(248, 249, 254, 1);
  box-shadow: 10px 20px 30px 0px rgba(248, 249, 254, 1);
  border-radius: 8px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 10px;
`;

export const SwitchButtonWrapper = styled(Box)``;

export const Monthly = styled.p<{ isActive: boolean }>`
  transition: 0.5s;
  color: ${(props) => (props.isActive ? "hsl(213, 96%, 18%)" : "#a3a2b0")};
  font-weight: 500;
`;

export const Yearly = styled.p<{ isActive: boolean }>`
  transition: 0.5s;
  color: ${(props) => (props.isActive ? "hsl(213, 96%, 18%)" : "#a3a2b0")};
  font-weight: 500;
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

export const ErrorWrapper = styled(Box)`
  margin-top: 6px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
