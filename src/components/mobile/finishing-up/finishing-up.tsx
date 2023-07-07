import { PlanTypes } from "../../../entities/plain-card/plain-card";
import {
  ChangePlan,
  ContentDivider,
  CustomServicesWrapper,
  MainWrapper,
  PlanPrice,
  PlanText,
  PlanTextWrapper,
  PlanWrapper,
  ResumePurchaseWrapper,
  Service,
  ServicePrice,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
  Total,
  TotalLabel,
  TotalWrapper,
} from "./finishing-up.styles";

interface FinishingUpProps {
  plan: PlanTypes;
  onChangePress: () => void;
  services: Array<{ name: string; value: number }>;
  isYearly: boolean;
  goBack: () => void;
  onConfirm: () => void;
}

export const FinishingUp = ({
  onChangePress,
  plan,
  services,

  isYearly,
}: FinishingUpProps) => {
  const getPlanText = () => {
    return `${plan} (${isYearly ? "Yearly" : "Monthly"})`;
  };

  const getPlanPrice = () => {
    switch (plan) {
      case PlanTypes.arcade:
        if (isYearly) return 90;
        return 9;
      case PlanTypes.advanced:
        if (isYearly) return 120;
        return 12;
      case PlanTypes.pro:
        if (isYearly) return 150;
        return 15;
    }
  };

  const getPaymentMethod = () => {
    if (isYearly) return "yr";
    return "mo";
  };

  const getTotalLabel = () => {
    if (isYearly) return "Total (per year)";
    return "Total (per month)";
  };

  const getTotalValue = () => {
    let totalServicesPrice = 0;
    services.forEach((item) => {
      totalServicesPrice += item.value;
    });

    if (isYearly) return totalServicesPrice * 10 + getPlanPrice();
    else return totalServicesPrice + getPlanPrice();
  };

  const renderServices = () => {
    return services.map((item) => {
      return (
        <CustomServicesWrapper>
          <Service>{item.name}</Service>
          <ServicePrice>{`$${
            isYearly ? item.value * 10 : item.value
          }/${getPaymentMethod()}`}</ServicePrice>
        </CustomServicesWrapper>
      );
    });
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>{"Finishing Up"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>
          {"Double-check everything looks OK before confirming"}
        </Subtitle>
      </SubtitleWrapper>
      <ResumePurchaseWrapper>
        <PlanWrapper>
          <PlanTextWrapper>
            <PlanText>{getPlanText()}</PlanText>
            <ChangePlan onClick={() => onChangePress()}>{"Change"}</ChangePlan>
          </PlanTextWrapper>
          <PlanPrice>{`$${getPlanPrice()}/${getPaymentMethod()}`}</PlanPrice>
        </PlanWrapper>
        <ContentDivider />
        {renderServices()}
      </ResumePurchaseWrapper>
      <TotalWrapper>
        <TotalLabel>{getTotalLabel()}</TotalLabel>
        <Total>{`$${getTotalValue()}/${getPaymentMethod()}`}</Total>
      </TotalWrapper>
    </MainWrapper>
  );
};
