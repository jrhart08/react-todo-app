import React from 'react'

export default function TodoList({todos, remove}) {
  const todoItems = todos.map(todo =>
    <li
      key={todo.id /* so React can track procedurally-generated components */}
      onClick={() => remove(todo.id)}>

      {todo.text}

    </li>
  )

  return <ul>{todoItems}</ul>
}
