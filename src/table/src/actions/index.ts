import * as tableActions from '../constants'
import { Dispatch } from 'redux'
import { matrix } from '@utils/services'

export const changeElem = (row: number, col: number, value: number) => (dispatch: Dispatch, getState: any) => {
  const { matrix } = getState().config
  matrix[row][col] = value

  dispatch({
    type: tableActions.changeElem,
    matrix
  })
}

export const changeRange = (size: number) => (dispatch: Dispatch, getState: any) => {
  const { matrix } = getState().config
  const newMatrix = new Array()
  for (let i = 0; i < size; i++) {
    newMatrix[i] = []
    for (let j = 0; j < size; j++) {
      newMatrix[i][j] = (matrix[i] && matrix[i][j]) ? matrix[i][j] : 0
    }
  }

  dispatch({
    type: tableActions.changeRange,
    matrix: newMatrix
  })
}

export const reset = (size: number) => (dispatch: Dispatch) => {
  const newMatrix = new Array()
  for (let i = 0; i < size; i++) {
    newMatrix[i] = []
    for (let j = 0; j < size; j++) {
      newMatrix[i][j] = 0
    }
  }

  dispatch({
    type: tableActions.reset,
    matrix: newMatrix
  })
}

export const setRandomMatrix = () => (dispatch: Dispatch, getState: any) => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const MAX_INTEGER = 9007199254740991

  const size = getState().config.matrix.length

  const randomMatrix = new Array()
  for (let i = 0; i < size; i++) {
    randomMatrix[i] = []
    for (let j = 0; j < size; j++) {
      randomMatrix[i][j] = getRandomInt(MAX_INTEGER)
    }
  }

  dispatch({
    type: tableActions.setRandom,
    matrix: randomMatrix
  })
}

export const setMatrix = (matrix: matrix) => (dispatch: Dispatch, getState: any) => {

  dispatch({
    type: tableActions.setRandom,
    matrix
  })
}