export type matrix = Array<Array<number>>

const swapRows = (pos: number, matrix: matrix): void => {
  const matrixSize = matrix.length
  let j
  let i = pos
  let temp = matrix[i][i]
  for (let j = pos + 1; j < matrixSize; j++) {
    if (Math.abs(matrix[j][pos]) > temp) {
      temp = Math.abs(matrix[j][pos])
      i = j
    }
  }
  if (i > pos) {
    for (j = pos; j < matrixSize; j++) {
      temp = matrix[i][j]
      matrix[i][j] = matrix[pos][j]
      matrix[pos][j] = temp
    }
  }
}

type triangulateMatrixtType = {
  triangulatedMatrix: matrix
  swapsCount: number
}

const triangulateMatrix = (matrix: matrix): triangulateMatrixtType => {
  const matrixSize = matrix.length
  let i, j, k, temp
  let swapsCount = 0
  for (i = 0; i < matrixSize; i++) {
    if (matrix[i][i] === 0) {
      swapRows(i, matrix)
      swapsCount++
    }
    for (j = i + 1; j < matrixSize; j++) {
      temp = matrix[j][i] / matrix[i][i]
      for (k = i; k < matrixSize; k++) {
        matrix[j][k] = matrix[j][k] - (matrix[i][k] * temp)
      }
    }
  }
  const triangulatedMatrix = matrix
  return { triangulatedMatrix, swapsCount }
}

export type CalculateDeterminantType = {
  triangulatedMatrix: matrix
  determinant: number
}

export const calculateDeterminant = (initialMatrix: matrix): CalculateDeterminantType => {
  const matrixSize = initialMatrix.length
  const { triangulatedMatrix, swapsCount } = triangulateMatrix(initialMatrix)
  let determinant = 1
  for (let i = 0; i < matrixSize; i++) {
    determinant = determinant * triangulatedMatrix[i][i]
  }
  if (swapsCount % 2 !== 0) {
    determinant = determinant * -1
  }
  return { triangulatedMatrix, determinant }
}
