export type PoemInfo = {
  numberOfLines: number,
  lines: LineInfo[],
  usedValues: Map<string, string[]>,
  allData:Record<string, string[]>,
} 

export type LineInfo = {
  text: string,
  type: number,
} 