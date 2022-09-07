import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  .SocialMediaBar__icon {
    margin-left: 14px;
    transition: filter 0.2s ease-in;

    &:hover {
      filter: invert(16%) sepia(24%) saturate(6851%) hue-rotate(321deg) brightness(119%) contrast(117%);
    }

    > a {
      display: flex;
      padding: 5px;
    }

    img {
      height: 20px;
      width: auto;
    }
  }
`

export default Container
