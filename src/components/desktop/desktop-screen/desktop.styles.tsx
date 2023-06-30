import { Container, Grid, Box } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  background-color: hsl(217, 100%, 97%);
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled(Container)`
  background-color: hsl(0, 0%, 100%);
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;
`;

export const ImageWrapper = styled(Box)`
  position: relative;
`;

export const GridWrapper = styled(Grid)``;

export const GridItem = styled(Grid)``;

export const StagesWrapper = styled(Box)`
  position: absolute;
  top: 0%;
  left: 10%;
`;

export const IndividualStepsWrapper = styled(Box)`
  margin-top: 36px;
`;
