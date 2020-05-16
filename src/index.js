import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

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

  const Content = (props) => {
    return (
      <div>
        <TextContent {...props.parts[0]} />
        <TextContent {...props.parts[1]} />
        <TextContent {...props.parts[2]} />
      </div>
    )
  }

  const Total = (props) => {
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
      <div>
        <p>
        Number of exercises {total}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))