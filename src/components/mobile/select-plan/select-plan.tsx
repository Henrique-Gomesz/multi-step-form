import IosSwitchMaterialUi from "ios-switch-material-ui";
import {
  PaymentsPlan,
  PlanTypes,
} from "../../../entities/plain-card/plain-card";
import { PlanCard } from "../plain-card/plain-card";
import {
  CardsWrapper,
  ErrorMessage,
  ErrorWrapper,
  IndividualCardWrapper,
  MainWrapper,
  Monthly,
  Subtitle,
  SubtitleWrapper,
  SwitchButtonWrapper,
  SwitchWrapper,
  Title,
  TitleWrapper,
  Yearly,
} from "./select-plan.styles";

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
  hasError: boolean;
}

export const SelectedPlain = ({
  hasError,
  cardsValue,
  handleSwitch,
  switchValue,
  handleCards,
}: Props) => {
  const getPaymentPlan = () => {
    if (switchValue) return PaymentsPlan.yearly;
    return PaymentsPlan.monthly;
  };

  const onCardClick = (planType: PlanTypes) => {
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
        <IndividualCardWrapper>
          <PlanCard
            onCardClick={onCardClick}
            isSelected={cardsValue.arcade}
            paymentPlan={getPaymentPlan()}
            plan={PlanTypes.arcade}
            price="9"
          />
        </IndividualCardWrapper>
        <IndividualCardWrapper>
          <PlanCard
            onCardClick={onCardClick}
            isSelected={cardsValue.advanced}
            paymentPlan={getPaymentPlan()}
            plan={PlanTypes.advanced}
            price="12"
          />
        </IndividualCardWrapper>
        <IndividualCardWrapper>
          <PlanCard
            onCardClick={onCardClick}
            isSelected={cardsValue.pro}
            paymentPlan={getPaymentPlan()}
            plan={PlanTypes.pro}
            price="15"
          />
        </IndividualCardWrapper>
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
    </MainWrapper>
  );
};
