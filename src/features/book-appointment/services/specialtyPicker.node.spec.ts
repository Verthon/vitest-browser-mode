import { describe, it, expect } from "vitest"
import { pickerReducer, initialState, canNext } from "./specialtyPicker"


describe('specialityPicker reducer', () => {
  it('selects an id', () => {
    const state = pickerReducer(initialState, { type: 'select', id: 'derm' })
    expect(state).toEqual({ selectedId: 'derm' })
    expect(canNext(state)).toBe(true)
  })

  it('resets selection', () => {
    const selected = { selectedId: 'cardio' } as const
    const state = pickerReducer(selected, { type: 'reset' })
    expect(state).toEqual(initialState)
    expect(canNext(state)).toBe(false)
  })

  it('ignores unknown actions', () => {
    // @ts-expect-error testing default case
    const state = pickerReducer(initialState, { type: '??' })
    expect(state).toEqual(initialState)
  })
})