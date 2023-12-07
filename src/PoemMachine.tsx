import data from "./data/SentenceParts.json";
import { PoemInfo, LineInfo } from "./Definitions";

const getRandFromArrayInner = (array: string[]) =>
  array[Math.floor(Math.random() * array.length - 1 + 1)];

const tryGetUnusedValue = (
  array: string[],
  name: string,
  usedValues: Map<string, string[]>
) => {
  let value = getRandFromArrayInner(array);

  if (usedValues.has(name)) {
    let item = usedValues.get(name);
    if (item && item.length < array.length) {
      while (item.includes(value)) {
        value = getRandFromArrayInner(array);
      }
    }
  }

  return value;
};

const setUnusedValues = (
  name: string,
  value: string,
  usedValues: Map<string, string[]>
) => {
  if (!usedValues.has(name)) {
    usedValues.set(name, []);
  }
  let item = usedValues.get(name);
  if (item) item.push(value);
};

const getRandFromArray = (
  array: string[],
  name: string,
  usedValues: Map<string, string[]>
) => {
  let value = tryGetUnusedValue(array, name, usedValues);
  setUnusedValues(name, value, usedValues);
  return value;
};

const randomRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const simple = (usedValues: any) => {
  return `The ${getRandFromArray(data.adjective, "adjective", usedValues)}  
              ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValues)} 
              ${getRandFromArray(data.verb, "verb", usedValues)} 
              ${getRandFromArray(data.preposition,"preposition", usedValues)} 
              ${getRandFromArray(data.article, "article", usedValues)} 
              ${getRandFromArray(data.adjective, "adjective", usedValues)} 
              ${getRandFromArray(data.common_noun, "common_noun",usedValues)}`;

};

const simple1 = (usedValues: any) => `${getRandFromArray(data.article,"article",usedValues)}  
                                      ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValues)} 
                                      ${getRandFromArray(data.verb,"verb",usedValues)}`;

const simple2 = (usedValues: any) => `${getRandFromArray(data.proper_noun,"common_noun",usedValues)} 
                             ${getRandFromArray(data.verb, "verb", usedValues)} 
                             ${getRandFromArray(data.preposition,"preposition",usedValues)} 
                             ${getRandFromArray(data.article,"article",usedValues)} 
                             ${getRandFromArray(data.adjective,"adjective",usedValues)} 
                             ${getRandFromArray(data.common_noun, "common_noun",usedValues)}`;

const simple3 = (usedValues: any) => `${getRandFromArray(data.article,"article", usedValues)} 
                             ${getRandFromArray(data.common_noun, "common_noun", usedValues )} 
                             ${getRandFromArray(data.verb, "verb", usedValues)} 
                             ${getRandFromArray(data.preposition,"preposition",usedValues )} 
                             ${getRandFromArray(data.article, "article",usedValues)} 
                             ${getRandFromArray(data.concrete_noun, "concrete_nou", usedValues )}`;

const simple4 = (usedValues: any) =>
  simple(usedValues) + ", " + simple3(usedValues);

const simple5 = (usedValues: any) => {
  const noun = getRandFromArray(data.concrete_noun,"concrete_noun", usedValues);
  const f = "aeiou".includes(noun[0]) ? "An" : "A";
  return `${f} ${noun} ${getRandFromArray(data.verb, "verb", usedValues)}`;
};

const toSentenceCase = (s: string) =>
  s.split(" ").map((word, i) =>
      i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    ).join(" ");

export const createPoem = () => {
  const numLines = randomRange(4, 10);
  let poem = new PoemInfo();
  poem.numberOfLines = numLines + 1;
  poem.lines = [];
  poem.usedValues = new Map<string, string[]>();
  poem.allData = data;
  for (let i = 0; i < numLines + 1; i++) {
    const numType = randomRange(0, 6);
    const lineInfo = new LineInfo();
    if (numType === 0) {
      lineInfo.text = toSentenceCase(simple(poem.usedValues) + ".");
    } else if (numType === 1) {
      lineInfo.text = toSentenceCase(simple1(poem.usedValues) + ".");
    } else if (numType === 2) {
      lineInfo.text = toSentenceCase(simple2(poem.usedValues) + ".");
    } else if (numType === 3) {
      lineInfo.text = toSentenceCase(simple3(poem.usedValues) + ".");
    } else if (numType === 4) {
      lineInfo.text = simple4(poem.usedValues) + ".";
    } else if (numType === 5) {
      lineInfo.text = simple5(poem.usedValues) + ".";
    }
    lineInfo.type = numType + 1;
    poem.lines.push(lineInfo);
  }
  return poem;
};


