import { useState } from "react";
import {
  PaymentsPlan,
  PlanTypes,
} from "../../../entities/plain-card/plain-card";
import { PlanCard } from "../plain-card/plain-card";
import {
  ButtonsWrapper,
  CardsWrapper,
  ErrorMessage,
  ErrorWrapper,
  GoBack,
  MainWrapper,
  Monthly,
  NextStep,
  Subtitle,
  SubtitleWrapper,
  SwitchButtonWrapper,
  SwitchWrapper,
  Title,
  TitleWrapper,
  Yearly,
} from "./select-plan.styles";
import IosSwitchMaterialUi from "ios-switch-material-ui";

interface Props {
  goBack: () => void;
  incrementStep: () => void;
  cardsValue: { arcade: boolean; advanced: boolean; pro: boolean };
  handleCards: (cards: {
    arcade: boolean;
    advanced: boolean;
    pro: boolean;
  }) => void;
  switchValue: boolean;
  handleSwitch: (value: boolean) => void;
}

export const SelectedPlain = ({
  goBack,
  incrementStep,
  cardsValue,
  handleSwitch,
  switchValue,
  handleCards,
}: Props) => {
  const [hasError, setHasError] = useState(false);

  const getPaymentPlan = () => {
    if (switchValue) return PaymentsPlan.yearly;
    return PaymentsPlan.monthly;
  };

  const onCardClick = (planType: PlanTypes) => {
    setHasError(false);
    switch (planType) {
      case PlanTypes.advanced:
        handleCards({
          arcade: false,
          advanced: true,
          pro: false,
        });
        break;
      case PlanTypes.arcade:
        handleCards({
          arcade: true,
          advanced: false,
          pro: false,
        });
        break;
      case PlanTypes.pro:
        handleCards({
          arcade: false,
          advanced: false,
          pro: true,
        });
        break;
    }
  };

  const changeSwitch = (konobOnLeft: boolean) => {
    if (konobOnLeft) return handleSwitch(false);
    return handleSwitch(true);
  };

  const onNextStep = () => {
    if (cardsValue.advanced || cardsValue.arcade || cardsValue.pro)
      return incrementStep();

    setHasError(true);
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>{"Select your plan"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>
          {"You have the option of monthly or yearly billing."}
        </Subtitle>
      </SubtitleWrapper>
      <CardsWrapper>
        <PlanCard
          onCardClick={onCardClick}
          isSelected={cardsValue.arcade}
          paymentPlan={getPaymentPlan()}
          plan={PlanTypes.arcade}
          price="9"
        />
        <PlanCard
          onCardClick={onCardClick}
          isSelected={cardsValue.advanced}
          paymentPlan={getPaymentPlan()}
          plan={PlanTypes.advanced}
          price="12"
        />
        <PlanCard
          onCardClick={onCardClick}
          isSelected={cardsValue.pro}
          paymentPlan={getPaymentPlan()}
          plan={PlanTypes.pro}
          price="15"
        />
      </CardsWrapper>
      {hasError && (
        <ErrorWrapper>
          <ErrorMessage>{"You need to select a plan!"}</ErrorMessage>
        </ErrorWrapper>
      )}
      <SwitchWrapper>
        <Monthly isActive={!switchValue}>{"Monthly"}</Monthly>
        <SwitchButtonWrapper>
          <IosSwitchMaterialUi
            defaultKnobOnLeft={!switchValue}
            onChange={(konobOnLeft) => changeSwitch(konobOnLeft)}
            colorSwitch="hsl(213, 96%, 18%)"
            colorKnobOnLeft="white"
            colorKnobOnRight="white"
          />
        </SwitchButtonWrapper>
        <Yearly isActive={switchValue}>{"Yearly"}</Yearly>
      </SwitchWrapper>
      <ButtonsWrapper>
        <GoBack onClick={() => goBack()}>{"Go Back"}</GoBack>
        <NextStep onClick={() => onNextStep()} variant="contained">
          {"Next Step"}
        </NextStep>
      </ButtonsWrapper>
    </MainWrapper>
  );
};
