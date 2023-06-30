import { useState } from "react";
import { CheckboxItem } from "../checkbox-item/checkbox-item";
import {
  ButtonsWrapper,
  CardsWrapper,
  GoBack,
  IndividualCardWrapper,
  MainWrapper,
  NextStep,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./add-ons.styles";

export interface AddOnsProps {
  goBack: () => void;
  incrementStep: () => void;
  services: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
  handleServices: (
    value: React.SetStateAction<{
      onlineService: boolean;
      largerStorage: boolean;
      customizableProfile: boolean;
    }>
  ) => void;
}

export const AddOns = ({
  goBack,
  incrementStep,
  handleServices,
  services,
}: AddOnsProps) => {
  const handleSelectCheckbox = (title: string) => {
    switch (title) {
      case "Online service":
        handleServices({ ...services, onlineService: !services.onlineService });
        break;
      case "Larger storage":
        handleServices({ ...services, largerStorage: !services.largerStorage });
        break;
      case "Customizable profile":
        handleServices({
          ...services,
          customizableProfile: !services.customizableProfile,
        });
        break;
    }
  };

  const onNextStep = () => {
    incrementStep();
  };

  const onGoBack = () => {
    goBack();
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>{"Pick add-ons"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle >{"Add-ons help enhance your gaming experience"}</Subtitle>
      </SubtitleWrapper>

      <CardsWrapper>
        <IndividualCardWrapper>
          <CheckboxItem
            price="1"
            subtitle="Acess to multiplayer games"
            title="Online service"
            value={services.onlineService}
            onClick={handleSelectCheckbox}
          />
        </IndividualCardWrapper>
        <IndividualCardWrapper>
          <CheckboxItem
            price="2"
            subtitle="Extra 1TB of cloud save"
            title="Larger storage"
            value={services.largerStorage}
            onClick={handleSelectCheckbox}
          />
        </IndividualCardWrapper>
        <IndividualCardWrapper>
          <CheckboxItem
            price="2"
            subtitle="Custom theme on your profile"
            title="Customizable profile"
            value={services.customizableProfile}
            onClick={handleSelectCheckbox}
          />
        </IndividualCardWrapper>
      </CardsWrapper>
      <ButtonsWrapper>
        <GoBack onClick={() => onGoBack()}>{"Go Back"}</GoBack>{" "}
        <NextStep onClick={() => onNextStep()}>{"Next Step"}</NextStep>
      </ButtonsWrapper>
    </MainWrapper>
  );
};
