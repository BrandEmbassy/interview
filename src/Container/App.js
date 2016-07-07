import React from 'react'
import List from './List'
import Detail from './Detail'

const App = ({ contacts }) => {
  return (
    <div className="app">
      <List contacts={contacts} />
      {/* Show dummy first */}
      <Detail {...contacts[0]}/>
    </div>
  )
}

export default App
