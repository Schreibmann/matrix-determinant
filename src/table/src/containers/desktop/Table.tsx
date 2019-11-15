import { connect } from 'react-redux'
import { changeElem, changeRange, reset, setRandomMatrix, setMatrix } from '../../actions'
import Table from '../../components/desktop/Table'
import { AppState } from '@src/app/src/reducers'

export default connect(
  (state: AppState) => ({
    matrix: state.config.matrix,
  }),
  {
    onChangeElem: changeElem,
    onChangeRange: changeRange,
    setRandomMatrix,
    setMatrix,
    reset
  },
)(Table)
