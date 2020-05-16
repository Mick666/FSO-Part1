import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

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
          {props.name} {props.exercises}
        </p>
    )
  }

  const Content = () => {
    return (
      <div>
        <TextContent {...part1} />
        <TextContent {...part2} />
        <TextContent {...part3} />
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
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))