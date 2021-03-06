import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([...props.points])
  const handleClick = () => {
    const lastRandom = selected;
    let random = Math.floor((Math.random() * 6));
    while (lastRandom == random) {
      random = Math.floor((Math.random() * 6))
    }
    setSelected(random);
  }
  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1;
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br></br>
      Votes: {points[selected]}
      <br></br>
      <button onClick={addVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const points = [0, 0, 0, 0, 0, 0]

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)