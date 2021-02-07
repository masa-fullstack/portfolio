export const getIsDuplicate = (arr1: string[], arr2: string[]): boolean =>
  [...arr1].filter((item) => arr2.includes(item)).length == arr1.length

export const getMaxPage = (itemCount: number, displayCount: number): number =>
  Math.ceil(itemCount / displayCount)
