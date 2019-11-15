import { combineReducers, Reducer } from 'redux'
import config, { ConfigState } from '@src/table/src/reducers/table'

export interface AppState {
  config: ConfigState
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  config
})

export default rootReducer
