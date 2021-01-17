import Main from './components/Main'
import Sunshine from './components/sunshine/Sunshine'
import styled from '@emotion/styled'
import './components/sunshine/ray.css'
import {useState} from 'react'
function App() {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="App">
      <Main>
          <Sunshine/>
          <div className="Ray1"style={{transform: 'rotate(90deg)'}}/>
          <div className="Ray2"style={{transform: 'rotate(0deg)'}}/>
          <div className="Ray3"style={{transform: 'rotate(45deg)'}}/>
          <div className="Ray4"style={{transform: 'rotate(90deg)'}}/>
          <div className="Ray5"style={{transform: 'rotate(180deg)'}}/>
          {
            clicked
            ?
            <div style={{zIndex:0, display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'}}>
            <text style={{textAlign: 'center'}}>Good morning, Katie!<br></br>I hope you slept well! </text>
            <Button onClick={()=>setClicked(false)}>Reset</Button>
            </div>
            :
            <Button onClick={()=>setClicked(true)}>Click Me</Button>
          }
      </Main>
    </div>
  );
}

const Button = styled.button`
  z-index: 0;
  height: 25px;
  width: 75px;
  background: orange;
  border: none;
  border-radius: 25px;
  box-shadow: 2px 2px 2px gold;
  :hover{
    background: gold;
  }
`



export default App;
