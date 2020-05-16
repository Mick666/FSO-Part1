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

  const Content = () => {
    return (
      <div>
        <TextContent {...parts[0]} />
        <TextContent {...parts[1]} />
        <TextContent {...parts[2]} />
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
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))