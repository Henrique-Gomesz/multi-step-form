import { Box, Button as BaseButton, TextField } from "@mui/material";
import { styled } from "styled-components";
export const MainWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 7vw 6vw;
`;

export const TitleWrapper = styled(Box)``;

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

export const InputLabelWrapper = styled(Box)``;

export const InputLabel = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 500;
`;

export const InputWrapper = styled(Box)`
  margin-top: 4vw;
  transition: 0.5s;
`;
export const InputGroupWrapper = styled(Box)`
  margin-top: 1vw;
  transition: 0.5s;
`;
export const BaseInput = styled(TextField).attrs({
  InputLabelProps: {
    sx: {
      fontWeight: 700,
      fontSize: "4vw",
    },
  },
  InputProps: {
    sx: {},
  },
  inputProps: {
    style: {
      marginTop: "3vw",
    },
    sx: {
      fontWeight: 700,
      fontSize: "4vw",
    },
  },
})`
  width: 100%;
  height: 12vh;

  transition: 0.5s;
`;
