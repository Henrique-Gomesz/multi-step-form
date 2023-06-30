import { Box } from "@mui/system";
import { styled } from "styled-components";

export const StepWrapper = styled(Box)<{ isActive: boolean }>`
  border: 1px solid;
  border-radius: 180px;
  width: 6vw;
  height: 6vw;
  padding: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  background-color: ${(props) => (props.isActive ? "#BFE0FF" : "none")};
  border-color: ${(props) =>
    props.isActive ? "hsl(228, 100%, 84%)" : "white"};
`;

export const Step = styled.p<{ isActive: boolean }>`
  font-size: 5vw;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "hsl(0, 0%, 0%)" : "white")};
`;
