import {
  CardWrapper,
  Checkbox,
  CheckboxWrapper,
  ItemSubtitle,
  ItemTextWrapper,
  ItemTitle,
  Price,
  PriceWrapper,
} from "./checkbox-item.styles";

export interface CheckboxItemProps {
  value: boolean;
  onClick: (title: string) => void;
  title: string;
  subtitle: string;
  price: string;
}

export const CheckboxItem = ({
  onClick,
  price,
  subtitle,
  title,
  value,
}: CheckboxItemProps) => {
  return (
    <CardWrapper isSelected={value}>
      <CheckboxWrapper>
        <Checkbox checked={value} onClick={() => onClick(title)} />
      </CheckboxWrapper>
      <ItemTextWrapper >
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
      </ItemTextWrapper>
      <PriceWrapper >
        <Price>{`+$${price}/mo`}</Price>
      </PriceWrapper>
    </CardWrapper>
  );
};
