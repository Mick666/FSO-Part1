import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = (props) => {
    return (
      <div>
        <h1>
          {props.course.name}
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
        <TextContent {...props.course.parts[0]} />
        <TextContent {...props.course.parts[1]} />
        <TextContent {...props.course.parts[2]} />
      </div>
    )
  }

  const Total = (props) => {
    const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
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
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))