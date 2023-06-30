import { useState } from "react";
import { UserInformationErrors } from "../../../entities/user-infomation-errors/user-informarion.errors";
import { SelectedPlain } from "../select-plan/select-plan";
import { DesktopSteps } from "../steps/desktop-steps";
import { YourInfo } from "../your-info/your-info";
import CardImage from "../../../assets/images/desktop/bg-sidebar-desktop.svg";
import {
  CardWrapper,
  GridItem,
  GridWrapper,
  ImageWrapper,
  IndividualStepsWrapper,
  MainWrapper,
  StagesWrapper,
} from "./desktop.styles";
import { AddOns } from "../add-ons/add-ons";
import { FinishingUp } from "../finishing-up/finishing-up";
import { PlanTypes } from "../../../entities/plain-card/plain-card";
import { ThankYou } from "../thank-you/thank-you";

export function DesktopLayout() {
  const [step, setStep] = useState(0);
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const [finished, setFinished] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [cards, setCards] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  const [switchState, setSwitchState] = useState(false);

  const [services, setServices] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleSwitch = (value: boolean) => {
    setSwitchState(value);
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

  const handleCards = (cards: {
    arcade: boolean;
    advanced: boolean;
    pro: boolean;
  }) => {
    setCards(cards);
  };

  const [userInformationErrors, setUserInformationErrors] =
    useState<UserInformationErrors>({
      emailError: false,
      nameError: false,
      phoneError: false,
    });

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
    incrementStep();
  };

  const clearUserInformationError = () => {
    return setUserInformationErrors({
      emailError: false,
      nameError: false,
      phoneError: false,
    });
  };

  const decrementStep = () => {
    if (step > 0) setStep((step) => step - 1);
  };

  const incrementStep = () => {
    if (step === 3) setFinished(true);
    if (step !== 3) setStep((step) => step + 1);
  };

  const navigateToSelectPlan = () => {
    setStep(1);
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

  const getStepComponent = () => {
    if (finished) return <ThankYou />;
    const mapComponents = [
      <YourInfo
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

    return mapComponents[step];
  };

  const renderSteps = () => {
    return steps.map((item, index) => {
      return (
        <IndividualStepsWrapper>
          <DesktopSteps
            isActive={step === index}
            stepNumber={index + 1}
            stepName={item}
          />
        </IndividualStepsWrapper>
      );
    });
  };

  return (
    <>
      <MainWrapper>
        <CardWrapper fixed maxWidth={"md"}>
          <GridWrapper container>
            <GridItem md={4} item>
              <ImageWrapper>
                <img src={CardImage} />
                <StagesWrapper>{renderSteps()}</StagesWrapper>
              </ImageWrapper>
            </GridItem>
            <GridItem md={1} item></GridItem>
            <GridItem md={6} item>
              {getStepComponent()}
            </GridItem>
            <GridItem md={1} item></GridItem>
          </GridWrapper>
        </CardWrapper>
      </MainWrapper>
    </>
  );
}
