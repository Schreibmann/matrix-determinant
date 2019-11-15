import { createReducer } from '@utils/reducer'
import * as actions from '../constants'
import { matrix } from '@utils/services'

export interface ConfigState {
  matrix: matrix
}

export const initialState: ConfigState = {
  matrix: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

const setMatrix = (state: ConfigState, { matrix }: { matrix: matrix }) => ({ ...state, matrix })

export default createReducer(initialState, {
  // @ts-ignore
  [actions.changeElem]: setMatrix,
  // @ts-ignore
  [actions.changeRange]: setMatrix,
  // @ts-ignore
  [actions.reset]: setMatrix,
  // @ts-ignore
  [actions.setRandom]: setMatrix,
  // @ts-ignore
  [actions.setMatrix]: setMatrix,
})
