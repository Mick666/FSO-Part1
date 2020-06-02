import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, number}) => {
  return (
    <div>{text} {number}</div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState("100%");
  const [all, setAll] = useState(0)
  const handleGoodFeedback = () => {
    setGood(good + 1)
    const total = good + 1 + bad + neutral
    const newAverage = (good + 1 + (bad * -1)) / total;
    setAverage(newAverage)
    setAll(total)
    setPositive(`${(100 * good) / total}%`)
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
    const total = good + 1 + bad + neutral
    const newAverage = (good + (bad * -1)) / total;
    setAverage(newAverage)
    setAll(total)
    setPositive(`${(100 * good) / total}%`)
  }
  const handleBadFeedback = () => {
    setBad(bad + 1)
    const total = good + 1 + bad + neutral
    const newAverage = (good +  ((bad + 1) * -1)) / total;
    setAverage(newAverage)
    setAll(total)
    setPositive(`${(100 * good) / total}%`)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>
      <h1>Statistics</h1>
      <Statistic text="Good feedback:" number={good} />
      <Statistic text="Neutral feedback:" number={neutral} />
      <Statistic text="Bad feedback:" number={bad} />
      <Statistic text="All feedback:" number={all} />
      <Statistic text="Average:" number={average} />
      <Statistic text="Positive:" number={positive} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)