import {
  Image,
  ImageWrapper,
  MainWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./thank-you.styles";

import ThankYouImage from "../../../assets/images/desktop/icon-thank-you.svg";

export const ThankYou = () => {
  return (
    <MainWrapper>
      <ImageWrapper>
        <Image src={ThankYouImage} />
      </ImageWrapper>
      <TitleWrapper>
        <Title>{"Thank you!"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>
          {
            "Thanks for confirming your subscription! We hope you have\nfun using our plataform. If you ever need support, please feel\nfree to email us at support@loremgamig.com."
          }
        </Subtitle>
      </SubtitleWrapper>
    </MainWrapper>
  );
};
