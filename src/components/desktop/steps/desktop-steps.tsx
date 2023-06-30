import {
  StepsWrapper,
  Step,
  StepName,
  StepNameWrapper,
  StepNumber,
  StepNumberWrapper,
} from "./desktop-steps.styles";

interface Props {
  isActive: boolean;
  stepNumber: number;
  stepName: string;
}

export const DesktopSteps = ({ isActive, stepName, stepNumber }: Props) => {
  return (
    <StepsWrapper>
      <StepNumberWrapper isActive={isActive}>
        <StepNumber isActive={isActive}>{stepNumber}</StepNumber>
      </StepNumberWrapper>
      <StepNameWrapper>
        <Step>{`STEP ${stepNumber}`}</Step>
        <StepName>{stepName}</StepName>
      </StepNameWrapper>
    </StepsWrapper>
  );
};
