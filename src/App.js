import Main1 from './components/Main1'
import Main from './components/Main'
import Main2 from './components/Main2'
import Sunshine from './components/sunshine/Sunshine'
import styled from '@emotion/styled'
import './components/sunshine/ray.css'
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
        <button style={{background: 'transparent', fontFamily: `'Dancing Script', cursive`, fontSize:'26px', height:'100vh', width: '100vw', border: 'none', color: 'white', fontWeight: 'bold'}} onClick={_handleClick}>
          Good morning, Sunshine!
          <br></br>
          Click anywhere to reset.
        </button>
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


export default App;
