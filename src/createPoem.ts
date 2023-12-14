import data from "./data/SentenceParts.json";
import {PoemInfo, LineInfo } from "./definitions";
import {randomRange} from "./helpers";
import {sentenceMap } from "./sentenceDefinitions";

export const createPoem = () => {

  const numLines = randomRange(4, 10);

  let poem: PoemInfo = {
    numberOfLines: numLines + 1,
    lines: [],
    usedValues: new Map<string, string[]>(),
    allData: data,
  };

  for (let i = 0; i < numLines + 1; i++) {

    const numType = randomRange(0, 6);

    const line: LineInfo = { type: numType + 1, text: "" };

    if (sentenceMap.has(numType)) {
        const r = sentenceMap.get(numType)
        if(r)
        line.text = r(poem.usedValues);
        poem.lines.push(line);
       }
  }
  return poem;
};
