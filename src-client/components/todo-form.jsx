import React from 'react'

export default function TodoForm({ addTodo }) {
  let inputElem
  const onSubmit = e => {
    e.preventDefault()
    addTodo(inputElem.value)
    inputElem.value = ''
  }

  const formClass = condition ? 'class1' : 'class2'

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group input-group-lg">
        <input className="form-control" ref={elem => inputElem = elem} />
        <span className="input-group-btn">
          <input className="btn btn-primary" type="submit" value="Add" />
        </span>
      </div>
    </form>
  )
}
