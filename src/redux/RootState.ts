import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'

import { rootReducer } from './RootReducer'

export type RootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
