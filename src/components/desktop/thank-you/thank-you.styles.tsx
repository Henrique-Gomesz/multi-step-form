import { Box } from "@mui/system";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const ImageWrapper = styled(Box)`
  margin-top: auto;
`;

export const Image = styled.img``;

export const TitleWrapper = styled(Box)`
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
  margin-bottom: auto;
  justify-content: center;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
`;
