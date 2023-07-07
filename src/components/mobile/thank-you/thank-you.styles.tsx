import { Box } from "@mui/system";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

export const ImageWrapper = styled(Box)`
  margin-top: auto;
`;

export const Image = styled.img`
width: 20vw;
`;

export const TitleWrapper = styled(Box)`
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: 8vw;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
  margin-bottom: auto;
  justify-content: center;
  margin-bottom: 32px;
 
`;

export const Subtitle = styled.p`
  text-align: center;
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 6vw;
  line-height: 7vw;
  
`;
