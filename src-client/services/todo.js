let nextId = 0

export function createTodo(text) {
  return Promise.resolve({
    text: text,
    id: nextId++
  })
}

export function deleteTodo(id) {
  return Promise.resolve()
}
