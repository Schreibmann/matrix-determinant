import React, { FC } from 'react'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { RangeBar } from '@ui/rangebar'
import * as layout from '@ui/layout'
import { calculateDeterminant, matrix } from '@utils/services'

interface ITableProps {
  matrix: matrix
  onChangeElem: (row: number, col: number, value: number) => void
  onChangeRange: (value: number) => void
  setRandomMatrix: () => void
  setMatrix: (matrix: matrix) => void
  reset: (size: number) => void
}

const Table: FC<ITableProps> = ({ matrix, onChangeElem, onChangeRange, setRandomMatrix, setMatrix, reset }: ITableProps) => {

  const DEFAULT_MESSAGE = 'fill matrix and push da button'
  const ERROR_MESSAGE = 'Matrix is uncompatible! Check values and try again'

  const size = matrix.length

  const [trigger, fireUpdate] = React.useState(false)
  const [result, setResult] = React.useState(DEFAULT_MESSAGE)

  const handleChangeRange = (value: number): void => {
    onChangeRange(value)
    setResult(DEFAULT_MESSAGE)
  }

  const handleChangeElem = (row: number, col: number, value: number): void => {
    onChangeElem(row, col, value)
    fireUpdate(!trigger)
  }

  const animateCalculation = (): void => {
    setRandomMatrix()
    fireUpdate(!trigger)
  }

  const handleCalculate = (): void => {
    const id = setInterval(animateCalculation, 100)
    setTimeout(() => {
      clearInterval(id)
      const _matrix = JSON.parse(JSON.stringify(matrix))
      const { determinant, triangulatedMatrix } = calculateDeterminant(_matrix)
      setMatrix(triangulatedMatrix)
      setResult(isNaN(determinant) ? 'NaN' : 'Determinant = ' + determinant)
    }, 1000, id)
  }

  const handleReset = (): void => {
    reset(size)
    setResult('fill matrix and push da button')
  }

  return (
    <layout.Column align='center'>
      <layout.Layout basis={30} />
      <Text size='m' height='xs' weight='bold'>
        Matrix range: {`${size}x${size}`}
      </Text>
      <layout.Layout basis={30}>
        <RangeBar
          initialValue={size}
          step={1}
          min={2}
          max={10}
          onSetRange={handleChangeRange}
        />
      </layout.Layout>
      {
        matrix.map((row, rowIndex) => (
          <layout.Row key={`row_${rowIndex}`} justify='space-between'>
            {
              row.map((col, colIndex) => (
                <layout.Column key={`col_${colIndex}`} align='center'>
                  <layout.Layout basis={45}>
                    <Input
                      id={`${rowIndex}.${colIndex}`}
                      type={isNaN(col) ? 'text' : 'number'}
                      border='lightGray'
                      color={isNaN(col) ? 'red' : 'black'}
                      value={isNaN(col) ? col.toString() : col}
                      readOnly={isNaN(col) ? true : false}
                      onChange={handleChangeElem}
                    />
                  </layout.Layout>
                </layout.Column>
              ))
            }
          </layout.Row>
        ))
      }
      <layout.Layout basis={30}>
        <Text color={result === 'NaN' ? 'red' : 'black'} size='n' height='xs' weight='bold'>
          {
            result === 'NaN'
              ? ERROR_MESSAGE
              : result
          }
        </Text>
      </layout.Layout>
      <layout.Row justify='center'>
        <layout.Layout basis={160}>
          <Button text onClick={result === 'NaN' ? handleReset : handleCalculate}>
            {result === 'NaN' ? 'reset' : 'push me'}
          </Button>
        </layout.Layout>
      </layout.Row>
    </layout.Column>
  )
}

export default React.memo(Table)
