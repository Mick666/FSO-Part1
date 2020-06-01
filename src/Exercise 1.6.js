import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodFeedback = () => {
    setGood(good + 1)
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>
      <h1>Statistics</h1>
      <div>Good feedback: {good}</div>
      <div>Neutral feedback: {neutral}</div>
      <div>Bad feedback: {bad}</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)