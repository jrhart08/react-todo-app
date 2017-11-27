import React from 'react'

export default function TodoTitle({todos}) {
  const count = todos.length

  return (
    <div>
      <h1>Todo Example</h1>
      <h2>{count} tasks left</h2>
      <Warning count={count} />
    </div>
  )
}

function Warning({count}) {
  if(count < 3) {
    return null // React just won't render nulls
  }

  // Unhelpful warning
  return <h3 style={{color: 'green'}}>Better get on these!</h3>
}
