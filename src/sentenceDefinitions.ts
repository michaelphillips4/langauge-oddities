import data from "./data/SentenceParts.json";
import {getRandFromArray,toSentenceCase} from "./helpers";

const simple = (usedValue: Map<string, string[]>) => 
`The ${getRandFromArray(data.adjective, "adjective", usedValue)}  
 ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValue)} 
 ${getRandFromArray(data.verb, "verb", usedValue)} 
 ${getRandFromArray(data.preposition,"preposition",usedValue)} 
 ${getRandFromArray(data.article, "article", usedValue)} 
 ${getRandFromArray(data.adjective, "adjective", usedValue)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValue)}`;

const simple1 = (usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.article, "article", usedValues)}  
 ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)}`;

const simple2 = (usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.proper_noun, "common_noun", usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)} 
 ${getRandFromArray(data.preposition,"preposition",usedValues)} 
 ${getRandFromArray(data.article,"article",usedValues)} 
 ${getRandFromArray(data.adjective,"adjective",usedValues)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValues)}`;

const simple3 = (usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.article, "article", usedValues)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)} 
 ${getRandFromArray(data.preposition,"preposition",usedValues)} 
 ${getRandFromArray(data.article,"article",usedValues)} 
 ${getRandFromArray(data.concrete_noun,"concrete_nou",usedValues)}`;

const simple4 = (usedValues: Map<string, string[]>) =>
  simple(usedValues) + ", " + simple3(usedValues);

const simple5 = (usedValues: Map<string, string[]>) => {
  const noun = getRandFromArray(data.concrete_noun,"concrete_noun",usedValues);
  const f = "aeiou".includes(noun[0]) ? "An" : "A";
  return `${f} ${noun} ${getRandFromArray(data.verb, "verb", usedValues)}`;
};
   
 export const sentenceMap = new Map<
    number,
    (usedValues: Map<string, string[]>) => string
  >([
    [0, (usedValues) => toSentenceCase(simple(usedValues) + ".")],
    [1, (usedValues) => toSentenceCase(simple1(usedValues) + ".")],
    [2, (usedValues) => toSentenceCase(simple2(usedValues) + ".")],
    [3, (usedValues) => toSentenceCase(simple3(usedValues) + ".")],
    [4, (usedValues) => simple4(usedValues) + "."],
    [5, (usedValues) => simple5(usedValues) + "."],
  ]);