import { styled } from "styled-components";
import { Box } from "@mui/material";
export const StepsWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StepNumberWrapper = styled(Box)<{ isActive: boolean }>`
  border: 1px solid;
  border-radius: 180px;
  width: 16px;
  height: 16px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.isActive ? "#BFE0FF" : "none"};
  border-color: ${(props) =>
    props.isActive ? "hsl(228, 100%, 84%)" : "white"};
`;

export const StepNumber = styled.p<{ isActive: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "hsl(0, 0%, 0%)" : "white")};
`;

export const StepNameWrapper = styled(Box)`
  margin-left: 16px;
`;

export const Step = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: hsl(231, 11%, 63%);
`;

export const StepName = styled.p`
  margin-top: 4px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
`;
