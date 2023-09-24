import React from "react"

import styled from "styled-components"
import * as styleVars from "../variable"

import "./mailchimp.scss"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ArrowButton = styled.button`
  background-color: ${styleVars.hackGold};
  color: ${styleVars.hackWhite};
  border-radius: 50%;
  border: none;
  transition: all 0.15s ease-in-out;
  top: 1px;
  right: 0;
  width: 54px;
  height: 54px;
  margin-left: -8px;

  &:hover {
    color: ${styleVars.hackGold};
    background-color: transparent;
  }
`

export const MceErrorResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: ${styleVars.hackBlack70} !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;
`

export const MceSuccessResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: #f07c74 !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;
`

export const MceEmbeddedSubscribe = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 74px;
  height: 36px;
  padding-left: 0px;

  @media only screen and (min-width: 767px) {
    left: 400px;
    right: inherit;
  }
`

export const McInputWrapper = styled.div`
  position: relative;
`

export const InputSignUp = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  line-height: 24px !important;
  outline: 0;
  color: ${styleVars.hackGold};
  width: 152px !important;
  height: 54px !important;
  padding: 4px 12px !important; /* aligns input text in element */
  background-color: transparent !important;
  border-color: transparent !important;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: normal !important;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
  float: center;
`

const SignUpForm = () => (
  <div id="mc_embed_signup">
    <form
      action="https://mchacks.us12.list-manage.com/subscribe/post?u=daca896c9229eac78a0cc3810&amp;id=a5a34f6561"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      rel="noopener noreferrer"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <div className="mc-input-wrapper">
            <input
              id="mce-EMAIL"
              type="email"
              name="EMAIL"
              className="required email"
              placeholder="your email here"
            />
            <MceEmbeddedSubscribe>
              <ArrowButton>
                <FontAwesomeIcon icon={faArrowRight} />
              </ArrowButton>
            </MceEmbeddedSubscribe>
          </div>

          <div
            className="response"
            id="mce-error-response"
            css={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            css={{ display: "none" }}
          ></div>
        </div>
        <div
          css={{
            position: "absolute",
            left: "-5000px",
          }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_daca896c9229eac78a0cc3810_a5a34f6561"
            tabIndex="-1"
            value=""
            readOnly
          />
        </div>
      </div>
    </form>
  </div>
)

export default SignUpForm
