import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from '../store'

export {useSelector} from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;