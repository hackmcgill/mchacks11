import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-transform: none;
  color: ${styleVars.darkBlue};
  background-color: ${styleVars.hackWhite};
  border-radius: 36px;
  border: none;
  transition: all 0.25s ease-in-out;
  box-shadow: 2px 4px 16px 0 ${styleVars.darkSecondaryBlue}66;
  padding-top: 14px;
  padding-bottom: 15px;
  padding-left: 27px;
  padding-right: 27px;
  //   height: 45px;
  //   width: 175px;
  display: block;
  margin: auto;
  margin-bottom: 20px;

  &:hover {
    background-color: ${styleVars.hackWhite}ee;
    color: ${styleVars.darkYellow};
  }

  @media only screen and (min-width: 1077px) {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    align-items: left;
  }
`

export default Button
