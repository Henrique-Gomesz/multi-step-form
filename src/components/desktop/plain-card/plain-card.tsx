import {
  PaymentsPlan,
  PlanCardProps,
  PlanTypes,
} from "../../../entities/plain-card/plain-card";
import {
  CardIcon,
  CardIconWrapper,
  CardInformationPrice,
  CardInformationPromotion,
  CardInformationTitle,
  CardInformationWrapper,
  CardWrapper,
} from "./plain-card.styles";

import AdvancedImage from "../../../assets/images/desktop/icon-advanced.svg";
import ArcadeImage from "../../../assets/images/desktop/icon-arcade.svg";
import ProImage from "../../../assets/images/desktop/icon-pro.svg";

export const PlanCard = ({
  plan,
  price,
  paymentPlan,
  onCardClick,
  isSelected,
}: PlanCardProps) => {
  const getPlainImage = () => {
    const mapImage = new Map<PlanTypes, string>([
      [PlanTypes.arcade, ArcadeImage],
      [PlanTypes.advanced, AdvancedImage],
      [PlanTypes.pro, ProImage],
    ]);
    return mapImage.get(plan);
  };

  const getPaymentPeriod = () => {
    if (paymentPlan === PaymentsPlan.monthly) return "mo";
    return "yr";
  };

  const getPrice = () => {
    if (paymentPlan === PaymentsPlan.yearly) return Number(price) * 10;

    return Number(price);
  };

  return (
    <CardWrapper
      isSelected={isSelected}
      onClick={() => {
        onCardClick(plan);
      }}
    >
      <CardIconWrapper>
        <CardIcon src={getPlainImage()} />
      </CardIconWrapper>
      <CardInformationWrapper>
        <CardInformationTitle>{plan}</CardInformationTitle>
        <CardInformationPrice>{`$${getPrice()}/${getPaymentPeriod()}`}</CardInformationPrice>
        {paymentPlan === PaymentsPlan.yearly && (
          <CardInformationPromotion>{"2 months free"}</CardInformationPromotion>
        )}
      </CardInformationWrapper>
    </CardWrapper>
  );
};
