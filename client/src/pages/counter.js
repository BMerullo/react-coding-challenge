import React, { useState, useEffect } from "react"
import styles from "../styles/Counter.module.css"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(1)

  const inputHandler = (e) => {
    setInput(parseInt(e.target.value))

    console.log(input)
  }

  const increase = () => {
    setCounter(counter + input)
  }

  const decrease = () => {
    setCounter(counter - input)
  }

  const reset = () => {
    setCounter(0)
    setInput(1)
  }

  return (
    <main>
      <container className={styles.challengeContainer}>
        <section className={styles.counter}>
          <h1>Counter</h1>
          <article>{counter}</article>
          <flex>
            <button className={styles.btn} onClick={decrease}>
              -
            </button>
            <button className={styles.btn} onClick={increase}>
              +
            </button>
          </flex>
          <flex className={styles.flexContainer}>
            <p>Increase / Decrease by</p>
            <input
              className={styles.inputField}
              type="number"
              name="input"
              value={input}
              onChange={inputHandler}
            />
          </flex>
          <button onClick={reset}>Reset</button>
        </section>
      </container>
    </main>
  )
}

export default Counter
