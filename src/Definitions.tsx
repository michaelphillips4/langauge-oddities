
export class PoemInfo{
  numberOfLines!: number;
  lines!: LineInfo[];
  usedValues!: Map<string, string[]>;
  allData:any;
} 

export class LineInfo{
  text!: string;
  type!: number;
} 

