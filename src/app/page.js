'use client'

import ColorCircle from "../shared/colorCircle.js"
import { useState, useEffect } from 'react'
import styles from "./page.module.css";
import './style.css'

const Home = () => {
  const colorList = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff', '#000']
  // first color is setted default
  const [counter, setCounter] = useState(4)
  const [isRunning, setRunning] = useState(false)
  const [color, setColor] = useState(0)
  const gapTime = 150

  function addColor() {
    if( counter < 6 )
      setCounter(counter+1)
  }

  function delColor() {
    if( counter > 2 )
      setCounter(counter-1)
  }

  function handleClick() {
    if(!isRunning) {
      setRunning(true)
    } else {
      setRunning(false)
    }
  }

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setColor(Math.floor(Math.random()*counter))
      }, gapTime)
      return () => clearInterval(intervalId)
    }
  }, [isRunning, counter])
  
  return (
    <div className={styles.page}>
      <header>
        <div className={styles.colorboard}>
          {colorList.slice(0, counter).map((color, index) => (<ColorCircle acolor={color} key={index}/> ))} 
        </div>
        <div className={styles.buttonbox}>
          <button onClick={addColor}>+</button>
          <button onClick={delColor}>-</button>
        </div>
      </header>
      <main className={styles.main}>
        <p>Player {counter+1}</p>
        <button onClick={handleClick} style={{background: colorList[color]}}>{isRunning?'STOP!':'Go!'}</button>
      </main>
    </div>
  );
}

export default Home;