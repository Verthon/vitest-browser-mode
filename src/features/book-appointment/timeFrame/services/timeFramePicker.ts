export type TimeFrameState = {
  frame: 'morning' | 'afternoon' | 'evening' | null
  date: string | null
}
export const initialState: TimeFrameState = { frame: null, date: null }

export type TimeFrameAction =
  | { type: 'setFrame'; frame: TimeFrameState['frame'] }
  | { type: 'setDate'; date: string }

export const timeFrameReducer = (s: TimeFrameState, a: TimeFrameAction): TimeFrameState => {
  switch (a.type) {
    case 'setFrame':
      return { ...s, frame: a.frame }
    case 'setDate':
      return { ...s, date: a.date }
    default:
      return s
  }
}

export const canNext = (s: TimeFrameState) => s.frame && s.date