import React from 'react'
import { connect } from 'react-redux'

import { IAppState } from '../store/store'
import { ICharacter } from '../reducers/characterReducer'

interface IProps {
  characters: ICharacter[]
}

class CharacterList extends React.Component<IProps> {
  public render() {
    const { characters } = this.props
    return (
      <div className="name-container">
        {characters &&
          characters.map(character => (
            <span key={character.name} className="name">
              {character.name}
            </span>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters
  }
}

export default connect(mapStateToProps)(CharacterList)
