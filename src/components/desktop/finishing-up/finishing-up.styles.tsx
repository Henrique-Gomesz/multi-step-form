import { Box, Button, Divider } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TitleWrapper = styled(Box)`
  margin-top: 36px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

export const SubtitleWrapper = styled(Box)`
  margin-top: 8px;
`;

export const Subtitle = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 15px;
`;

export const ResumePurchaseWrapper = styled(Box)`
  margin-top: 36px;
  border-radius: 8px;
  background-color: #f8f9fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
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
`;

export const PlanText = styled.p`
  color: hsl(213, 96%, 18%);
  margin-bottom: 6px;
  font-weight: 500;
`;

export const ChangePlan = styled.p`
  color: hsl(231, 11%, 63%);
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const PlanPrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 600;
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
  font-size: 14px;
`;

export const ServicePrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-size: 14px;
`;

export const TotalWrapper = styled(Box)`
  display: flex;
  width: 100%;
  padding: 18px;
  justify-content: space-between;
`;

export const TotalLabel = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 14px;
`;

export const Total = styled.p`
  color: hsl(243, 100%, 62%);
  font-weight: 600;
  font-size: 18px;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;

  margin-top: auto;
  margin-bottom: 24px;
  width: 100%;
  padding: 0px 18px;
`;

export const GoBack = styled(Button).attrs({
  sx: {
    textTransform: "capitalize",
    color: "hsl(231, 11%, 63%)",
    fontWeight: 600,
  },
})``;

export const NextStep = styled(Button).attrs({
  sx: {
    textTransform: "capitalize",
    fontSize: 14,
    paddingRight: 3,
    paddingLeft: 3,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 2,
    ":hover": {
      backgroundColor:
        "hsl(243.04347826086956, 93.24324324324324%, 70.98039215686273%)",
    },
    backgroundColor: "hsl(243, 100%, 62%)",
    color: "white",
  },
})``;

export const ContentDivider = styled.hr`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 1px;
  background-color: hsl(229, 24%, 87%);
  border: none;
`;
