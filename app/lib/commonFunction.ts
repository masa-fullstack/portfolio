//arr1が全てarr2に含まれているかチェック
export const getIsDuplicate = (arr1: string[], arr2: string[]): boolean =>
  [...arr1].filter((item) => arr2.includes(item)).length == arr1.length

//最大ページ数を算出する
export const getMaxPage = (itemCount: number, displayCount: number): number =>
  Math.ceil(itemCount / displayCount)
