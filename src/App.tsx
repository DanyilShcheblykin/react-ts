import React, { useContext, useEffect, useRef, useState, } from 'react';
import UseStateAdd from './hooks/useState/useStateAdd';
import UseStateInterval from './hooks/useState/useStateInterval';
import UseStateObject from './hooks/useState/useStateObject';
import UseStateClickVarinets from './hooks/useState/useStateClickVarienst';
import UseEffect from './hooks/useEffect/useEffect';
import Data from './hooks/useContext/useContextParent';
import UseCallBack from './hooks/useCallBack/useCallBack';
import UseContextParent from './hooks/useContext/useContextParent';
import UseReducer from './hooks/useReducer/useReducer';
import UseRef from './hooks/useRef/useRef';
import RouterDom from './reactRouterDom/routerDom';
import WindowResize from './customHooks/windowResize/windowResize';
import DocumnetProp from './documentElementProp/elementProp';
import ScrollPercent from './customHooks/useScrollPercentege/scrollPercentege';
import Visible from './customHooks/useVisibleElement/visible';
import Header from './components/header/header';
import ModalWindow from './components/modalWindow/modalWindow';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import BooleanState from './customHooks/useBooleanState/booleanState';
import Window from './customHooks/windowEvent/windowEvent';
import SelectorCombinators from './scss/selector-combinators/selector-combinators';
import Priorities from './scss/priorities/priorities';
import PseudoClases from './scss/pseudo-clases/pseudo-clases';
import Transition from './scss/animation/transition/transition';
import Animation from './scss/animation/anim/animation';
import Mixin from './scss/mixin/mixin';
import SobesMain from './sobes/timer';
import Grid from './scss/grid/grid';
import General from './scss/general/general';
import GeneralStyles from './scss/general/general';
import CheckBox from './components/checkBox';

function App() {

  const [state, setState] = useState(['mama', 'papa', 'baba'])
  const [text, setText] = useState('')

  const addToEnd = () => {
    const newArr = state.filter(item => item !== text)
    newArr.push(text)
    setState(newArr)
  }


  return (
    <BrowserRouter>
      <input onChange={(e) => setText(e.target.value)} type="text" name="" id="" />
      <ul>
        {state.map(((item)=>(
          <li>{item}</li>
        )))}
      </ul>
      <button onClick={addToEnd}>Add text</button>
    </BrowserRouter>
  )
}

export default App;
