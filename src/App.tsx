import React, { Component } from 'react'
import './App.css'

import CharacterList from './containers/CharacterList'

class App extends Component {
  render() {
    return (
      <>
        <h1>The Force Awakens</h1>
        <CharacterList />
      </>
    )
  }
}

export default App
