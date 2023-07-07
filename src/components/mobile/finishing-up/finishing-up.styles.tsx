import { Box, Button, Divider } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 7vw 6vw;
`;

export const TitleWrapper = styled(Box)``;

export const Title = styled.p`
  font-size: 6.5vw;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
`;

export const Subtitle = styled.p`
  margin-top: 6px;
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 4vw;
`;

export const ResumePurchaseWrapper = styled(Box)`
  margin-top: 28px;
  padding: 16px 0px;
  border-radius: 8px;
  background-color: #f8f9fe;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const PlanWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PlanTextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
`;

export const PlanText = styled.p`
  color: hsl(213, 96%, 18%);
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 4vw;
`;

export const ChangePlan = styled.p`

  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 4vw;
  text-decoration: underline;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const PlanPrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 600;
  font-size: 4vw;
  margin-right: 16px;
`;

export const CustomServicesWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Service = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 4vw;
  font-weight: 500;
  margin-left: 16px;
`;

export const ServicePrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-size: 4vw;
  font-weight: 500;
  margin-right: 16px;
`;

export const TotalWrapper = styled(Box)`
  margin-top: 12px;
  display: flex;
  width: 100%;
  padding: 6px;
  justify-content: space-between;
  
`;

export const TotalLabel = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 4vw;
  margin-left: 16px;
`;

export const Total = styled.p`
  color: hsl(243, 100%, 62%);
  font-weight: 600;
  font-size: 5vw;
  margin-right: 16px;
`;

export const ContentDivider = styled.hr`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 1px;
  background-color: hsl(229, 24%, 87%);
  border: none;
`;
