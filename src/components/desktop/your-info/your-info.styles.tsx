import { Box, Button as BaseButton, TextField } from "@mui/material";
import { styled } from "styled-components";
export const MainWrapper = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
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

export const InputLabelWrapper = styled(Box)``;

export const InputLabel = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 500;
`;

export const InputWrapper = styled(Box)`
  margin-top: 36px;
  transition: 0.5s;
`;
export const InputGroupWrapper = styled(Box)`
  margin-top: 24px;
  transition: 0.5s;
`;
export const BaseInput = styled(TextField).attrs({
  InputLabelProps: {
    style: {
      fontWeight: 700,
    },
  },
  inputProps: {
    style: {
      fontWeight: 700,
    },
  },
})`
  width: 100%;
  transition: 0.5s;
`;

export const ButtonWrapper = styled(Box)`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const Button = styled(BaseButton).attrs({
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
