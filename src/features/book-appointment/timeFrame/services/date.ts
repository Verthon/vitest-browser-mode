import { addDays, formatISO, parseISO } from 'date-fns'

/**
 * Returns today in canonical ISO `YYYY-MM-DD`.
 * `formatISO` with `representation:'date'` outputs just the date part.
 */
export const todayISO = (): string =>
  formatISO(new Date(), { representation: 'date' })

/** Adds N days to an ISO date string and returns another ISO string. */
export const addDaysISO = (iso: string, days: number): string =>
  formatISO(addDays(parseISO(iso), days), { representation: 'date' })

/** Extracts day‑of‑month without leading zero for calendar buttons. */
export const dayNumber = (iso: string): string =>
  iso.slice(8, 10).replace(/^0/, '')

/** Simple same‑day compare because ISO strings are canonical. */
export const isSameISO = (a: string, b: string): boolean => a === b