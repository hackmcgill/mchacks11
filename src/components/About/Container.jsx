import styled from "styled-components"

export const Container = styled.div`
  padding: 100px 40px 0 40px;
  position: relative;

  .color-blur-3 {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
`

export default Container
