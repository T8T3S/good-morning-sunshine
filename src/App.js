import Main1 from './components/Main1'
import Main from './components/Main'
import Main2 from './components/Main2'
import Sunshine from './components/sunshine/Sunshine'
import styled from '@emotion/styled'
import './components/sunshine/ray.css'
import CloudButton from './CloudButton.png'
import {useState} from 'react'
function App() {
  const [clicked, setClicked] = useState(false)
  const [switched, setSwitched] = useState(false)
  function _handleClick(){
    setClicked(!clicked)
    setTimeout(()=>{
      setSwitched(!switched)
    },1000)
  }
  return (
    <div className="App">
      {
      !switched
      ?
      <Main>  
        <Main1 propsDisplay="flex" yTrans={clicked ? '100%' : '0px'}>
          <Sunshine/>
          <div className="Ray2"style={{transform: 'rotate(45deg)'}}/>
          <div className="Ray3"style={{transform: 'rotate(90deg)'}}/>
          <div className="Ray4"style={{transform: 'rotate(135deg)'}}/>
          <div className="Ray5"style={{transform: 'rotate(180deg)'}}/>
          <Button onClick={_handleClick}>Click me!</Button>
        </Main1>
      </Main>
      :
      <Main2>
        <BackButtonContainer>
        Good morning, Sunshine!
        <BackButton style={{}}onClick={_handleClick}>
          <img src={CloudButton} alt="Button"/>
          Back
        </BackButton>
        </BackButtonContainer>
        <iframe title="jackJohnsoniFrame" src="https://open.spotify.com/embed/track/451GvHwY99NKV4zdKPRWmv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Main2>
      }
      
    </div>
  );
}

const Button = styled.button`
font-family: 'Dancing Script', cursive;
font-size: 26px;
  z-index: 1000;
  height: 200px;
  width: 200px;
  background: transparent;
  border: none;
  border-radius: 100px;
  :hover{
    background: gold;
  }
`
const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const BackButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  fontFamily:'Dancing Script', cursive;
  pointer-events: auto;
`
export default App;
