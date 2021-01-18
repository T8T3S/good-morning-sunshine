import styled from '@emotion/styled'

const Main2 = styled.div`
  @keyframes fadeInOpacity{
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: column;
  font-size: 26px;
  background: #2d81bd;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;

`

export default Main2