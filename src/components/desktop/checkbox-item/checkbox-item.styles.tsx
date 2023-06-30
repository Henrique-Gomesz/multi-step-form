import { Box, Checkbox as BaseCheckbox, Grid } from "@mui/material";
import { styled } from "styled-components";

export const CardWrapper = styled(Box)<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: hsl(213, 96%, 18%);
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) =>
    props.isSelected ? "hsl(217, 100%, 97%)" : "hsl(0, 0%, 100%)"};

  transition: 0.5s;
`;

export const CheckboxWrapper = styled(Grid)`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Checkbox = styled(BaseCheckbox)``;

export const ItemTextWrapper = styled(Grid)``;

export const ItemTitle = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 600;
`;

export const ItemSubtitle = styled.p`
  margin-top: 6px;
  color: hsl(231, 11%, 63%);
  font-weight: 500;
  font-size: 14px;
`;

export const PriceWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const Price = styled.p`
  color: hsl(243, 100%, 62%);
  font-weight: 500;
  font-size: 14px;
`;
