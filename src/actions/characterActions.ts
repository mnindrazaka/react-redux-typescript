import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { ICharacter, ICharacterState } from '../reducers/characterReducer'

export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL'
}

export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL
  characters: ICharacter[]
}

export type CharacterActions = ICharacterGetAllAction

export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.co/api/people/')
      dispatch({
        characters: response.data.results,
        type: CharacterActionTypes.GET_ALL
      })
    } catch (err) {
      console.log(err)
    }
  }
}
