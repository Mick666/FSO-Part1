import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0);
  const [all, setAll] = useState(0)
  const handleGoodFeedback = () => {
    setGood(good + 1)
    handleAverageUpdate(good + 1, bad, neutral)
    handleAllUpdate(good + 1, bad, neutral)
    handlePositiveUpdate(good + 1, bad, neutral)
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
    handleAverageUpdate(good, bad, neutral+1)
    handleAllUpdate(good, bad, neutral+1)
    handlePositiveUpdate(good, bad, neutral+1)
  }
  const handleBadFeedback = () => {
    setBad(bad + 1)
    handleAverageUpdate(good, bad+1, neutral)
    handleAllUpdate(good, bad+1, neutral)
    handlePositiveUpdate(good, bad+1, neutral)
  }
  const handleAverageUpdate = (good, bad, neutral) => {
    const total = good + neutral + bad;
    const newAverage = (good + (bad * -1)) / total;
    setAverage(newAverage)
  }
  const handlePositiveUpdate = (good, bad, neutral) => {
    const total = good + neutral + bad;
    setPositive((100 * good) / total)
  }
  const handleAllUpdate = (good, bad, neutral) => {
    const total = good + neutral + bad;
    setAll(total)
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
      <div>All feedback: {all}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive}%</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)