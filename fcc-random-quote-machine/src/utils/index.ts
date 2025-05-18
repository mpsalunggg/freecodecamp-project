import type { QuotesType } from '../data'

export const getRandomIndex = (array: QuotesType[]) => {
  return Math.floor(Math.random() * array.length)
}
