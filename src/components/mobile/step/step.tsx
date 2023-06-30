import { StepWrapper, Step } from "./step.styles";

interface StepProps {
  isActive: boolean;
  step: number;
}

export const MobileStep = ({ isActive, step }: StepProps) => {
  return (
    <StepWrapper isActive={isActive}>
      <Step isActive={isActive}>{step}</Step>
    </StepWrapper>
  );
};
