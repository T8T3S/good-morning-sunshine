import styled from '@emotion/styled'

const Main1 = styled.div`
  @keyframes fadeInOpacity{
    0% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
  display: ${props=>props.propsDisplay ? props.propsDisplay : 'flex'};
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  transform: translate(0px,${props=>props.yTrans ? props.yTrans : '0px'});
  transition-duration: 2s;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
`

export default Main1