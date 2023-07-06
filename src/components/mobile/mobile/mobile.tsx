import {
  ButtonsWrapper,
  CardWrapper,
  ContentSeparator,
  GoBack,
  ImageWrapper,
  MainWrapper,
  NextStep,
  StepWrapper,
  StepsWrapper,
} from "./mobile.styles";

import MobileBanner from "../../../assets/images/mobile/bg-sidebar-mobile.svg";
import { MobileStep } from "../step/step";

import { useState } from "react";
import { PersonalInfo } from "../personal-info/personal-info";
import { UserInformationErrors } from "../../../entities/user-infomation-errors/user-informarion.errors";
import { SelectedPlain } from "../select-plan/select-plan";

const STEPS = [1, 2, 3, 4];

export const Mobile = () => {
  const [step, setStep] = useState(1);

  const [cards, setCards] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userInformationErrors, setUserInformationErrors] =
    useState<UserInformationErrors>({
      emailError: false,
      nameError: false,
      phoneError: false,
    });
  const [switchState, setSwitchState] = useState(false);


  const handleCards = (cards: {
    arcade: boolean;
    advanced: boolean;
    pro: boolean;
  }) => {
    setCards(cards);
  };


  const handleSwitch = (value: boolean) => {
    setSwitchState(value);
  };

  const onUserInformarionSubmit = (
    name: string,
    email: string,
    telephone: string
  ) => {
    if (!name.length)
      return setUserInformationErrors({
        ...userInformationErrors,
        nameError: true,
      });
    if (!email.length)
      return setUserInformationErrors({
        ...userInformationErrors,
        emailError: true,
      });
    if (!telephone.length)
      return setUserInformationErrors({
        ...userInformationErrors,
        phoneError: true,
      });

    return true;
  };

  const clearUserInformationError = () => {
    return setUserInformationErrors({
      emailError: false,
      nameError: false,
      phoneError: false,
    });
  };

  const handleName = (text: string) => {
    setName(text);
  };

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePhone = (text: string) => {
    setPhone(text);
  };

  const onNextStep = () => {
    if (onUserInformarionSubmit(name, email, phone) === true) incrementStep();
  };

  const incrementStep = () => {
    if (step < 4) setStep((previus) => previus + 1);
  };

  const decrementStep = () => {
    if (step > 1) setStep((previus) => previus - 1);
  };

  const renderStepsDisplay = () => {
    return STEPS.map((item, index) => {
      return (
        <StepWrapper hasPadding={index === 3 ? false : true}>
          <MobileStep isActive={item === step} step={index + 1} />
        </StepWrapper>
      );
    });
  };

  const getStepComponent = () => {
    const mapComponents = [
      <PersonalInfo
        phone={phone}
        name={name}
        handlePhone={handlePhone}
        handleName={handleName}
        handleEmail={handleEmail}
        email={email}
        clearError={clearUserInformationError}
        errors={userInformationErrors}
        onButtonPress={onUserInformarionSubmit}
      />,
      <SelectedPlain
        switchValue={switchState}
        handleSwitch={handleSwitch}
        cardsValue={cards}
        handleCards={handleCards}
        incrementStep={incrementStep}
        goBack={decrementStep}
      />,
    ];

    return mapComponents[step - 1];
  };

  return (
    <MainWrapper>
      <ImageWrapper>
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "fill",
          }}
          src={MobileBanner}
        ></img>
        <StepsWrapper>{renderStepsDisplay()}</StepsWrapper>
        <CardWrapper>{getStepComponent()}</CardWrapper>
      </ImageWrapper>
      <ContentSeparator></ContentSeparator>
      <ButtonsWrapper hasGoBack={step !== 1}>
        {step !== 1 && <GoBack onClick={decrementStep}>{"Go Back"}</GoBack>}

        <NextStep onClick={onNextStep}>{"Next Step"}</NextStep>
      </ButtonsWrapper>
    </MainWrapper>
  );
};
