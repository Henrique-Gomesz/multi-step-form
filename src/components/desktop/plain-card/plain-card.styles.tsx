import { Box } from "@mui/material";
import { styled } from "styled-components";

export const CardWrapper = styled(Box)<{isSelected:boolean}>`
cursor: pointer;
border-color: ${(props) => props.isSelected ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)" };
background-color: ${(props) => props.isSelected ? 'hsl(217, 100%, 97%)' : 'hsl(0, 0%, 100%)'};
border-width: 1px;
border-style: solid;
border-radius: 8px;
padding: 16px 16px;
display: flex;
flex-direction: column;
height: 135px;
width: 95px;
transition: 0.5s;
&:hover{
  transition: 0.5s;
  background-color: ${(props) => props.isSelected ? 'hsl(217, 100%, 97%)' : 'hsl(217, 100%, 97%)'};
}
`;

export const CardIconWrapper = styled(Box)``;

export const CardIcon = styled.img``;

export const CardInformationWrapper = styled(Box)`
  transition: 0.5s;
margin-top: auto;
`;

export const CardInformationTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: hsl(213, 96%, 18%);
`;

export const CardInformationPrice = styled.p`
margin-top: 6px;
  font-weight: 500;
  font-size: 13px;
  color: hsl(231, 11%, 63%);
  margin-bottom: 6px;
`;

export const CardInformationPromotion = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: hsl(213, 96%, 18%);
`;
