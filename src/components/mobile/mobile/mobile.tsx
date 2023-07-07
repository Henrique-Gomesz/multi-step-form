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

import { useState, useTransition } from "react";
import { PlanTypes } from "../../../entities/plain-card/plain-card";
import { UserInformationErrors } from "../../../entities/user-infomation-errors/user-informarion.errors";
import { AddOns } from "../add-ons/add-ons";
import { FinishingUp } from "../finishing-up/finishing-up";
import { PersonalInfo } from "../personal-info/personal-info";
import { SelectedPlain } from "../select-plan/select-plan";
import { ThankYou } from "../thank-you/thank-you";

const STEPS = [1, 2, 3, 4];

export const Mobile = () => {
  const [step, setStep] = useState(1);
  const [finished, setFinished] = useState(false);
  const [hasSelectedPlanError, setHasSelectedPlanError] = useState(false);
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

  const [services, setServices] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleHasSelectedPlanError = (newValue: boolean) => {
    setHasSelectedPlanError(newValue);
  };

  const handleCards = (cards: {
    arcade: boolean;
    advanced: boolean;
    pro: boolean;
  }) => {
    setHasSelectedPlanError(false);
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

  const selectCardVerification = () => {
    if (cards.advanced || cards.arcade || cards.pro) return true;
    setHasSelectedPlanError(true);
    return false;
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
    if (step === 1)
      if (onUserInformarionSubmit(name, email, phone) === true)
        return incrementStep();
    if (step === 2) if (selectCardVerification()) return incrementStep();

    incrementStep();
  };

  const incrementStep = () => {
    console.log(step);
    if (step === 4) setFinished(true);
    if (step <= 4) setStep((previus) => previus + 1);
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

  const getPlan = () => {
    if (cards.advanced) return PlanTypes.advanced;
    if (cards.arcade) return PlanTypes.arcade;
    if (cards.pro) return PlanTypes.pro;

    return PlanTypes.advanced;
  };
  const getServices = () => {
    let servicesList: Array<{ name: string; value: number }> = [];

    if (services.customizableProfile)
      servicesList.push({
        name: "Customizable profile",
        value: 2,
      });
    if (services.largerStorage)
      servicesList.push({
        name: "Larger storage",
        value: 2,
      });
    if (services.onlineService)
      servicesList.push({
        name: "Online service",
        value: 1,
      });

    return servicesList;
  };

  const navigateToSelectPlan = () => {
    setStep(2);
  };

  const getStepComponent = () => {
    if (finished) return <ThankYou />;
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
        hasError={hasSelectedPlanError}
        switchValue={switchState}
        handleSwitch={handleSwitch}
        cardsValue={cards}
        handleCards={handleCards}
        incrementStep={incrementStep}
        goBack={decrementStep}
      />,
      <AddOns
        services={services}
        handleServices={setServices}
        goBack={decrementStep}
        incrementStep={incrementStep}
      />,
      <FinishingUp
        onConfirm={incrementStep}
        goBack={decrementStep}
        services={getServices()}
        plan={getPlan()}
        isYearly={switchState}
        onChangePress={navigateToSelectPlan}
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
      {step < 5 && (
        <ButtonsWrapper hasGoBack={step !== 1}>
          {step !== 1 && <GoBack onClick={decrementStep}>{"Go Back"}</GoBack>}

          <NextStep onClick={onNextStep}>{"Next Step"}</NextStep>
        </ButtonsWrapper>
      )}
    </MainWrapper>
  );
};
