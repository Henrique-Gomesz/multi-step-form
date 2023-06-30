import { UserInformationErrors } from "../../../entities/user-infomation-errors/user-informarion.errors";
import {
  BaseInput,
  InputGroupWrapper,
  InputWrapper,
  MainWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./personal-info.styles";

interface Props {
  onButtonPress: (name: string, email: string, telephone: string) => void;
  errors: UserInformationErrors;
  clearError: () => void;
  handleEmail: (text: string) => void;
  handleName: (text: string) => void;
  handlePhone: (text: string) => void;
  email: string;
  phone: string;
  name: string;
}

export const PersonalInfo = ({
  clearError,
  errors,
  handleEmail,
  handleName,
  handlePhone,
  email,
  name,
  phone,
}: Props) => {
  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>{"Personal info"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>{"Please provide your name, email"}</Subtitle>
        <Subtitle>{"address, and phone number."}</Subtitle>
      </SubtitleWrapper>
      <InputGroupWrapper>
        <InputWrapper>
          <BaseInput
            variant="standard"
            defaultValue={name}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              clearError();
              handleName(event.target.value);
            }}
            error={errors.nameError}
            required
            helperText={errors.nameError ? "Invalid name" : undefined}
            placeholder="e.g Sthephen King"
            color="primary"
            label={"Name"}
          />
        </InputWrapper>
        <InputWrapper>
          <BaseInput
        hiddenLabel={true}
        fullWidth
            variant="standard"
            defaultValue={email}
            type="email"
            inputMode="email"
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              clearError();
              handleEmail(event.target.value);
            }}
            error={errors.emailError}
            required
            helperText={errors.emailError ? "Invalid email" : undefined}
            color="primary"
            placeholder="e.g sthephanking@lorem.com"
            label={"Email Address"}
          />
        </InputWrapper>

        <InputWrapper>
          <BaseInput
            variant="standard"
            defaultValue={phone}
            required
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              clearError();
              handlePhone(event.target.value);
            }}
            error={errors.phoneError}
            helperText={errors.phoneError ? "Incorrect phone" : undefined}
            placeholder="e.g +1 234 567 890"
            label={"Phone number"}
          />
        </InputWrapper>
      </InputGroupWrapper>
    </MainWrapper>
  );
};
