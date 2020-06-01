import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }

  const TextContent = (props) => {
    return (
        <p>
          {props.text} {props.exercises}
        </p>
    )
  }

//Part 1 of the exercise; the Content part that renders the parts itself
  const Content = () => {
    return (
      <div>
        <p>{part1} {exercises1} </p>
        <p>{part2} {exercises2} </p>
        <p>{part3} {exercises3} </p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
        Number of exercises {props.total}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))