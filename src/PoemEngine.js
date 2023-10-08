import data from "./Data/SentenceParts.json";

const getRandFromArrayInner = (array) => { return array[Math.floor((Math.random() * array.length - 1) + 1)]; };

const tryGetUnusedValue = (array, name, usedValues) => {

  let value = getRandFromArrayInner(array);

  if (usedValues.hasOwnProperty(name) && usedValues[name].length < array.length) {

    while (usedValues[name].includes(value)) {
      value = getRandFromArrayInner(array);
    }
  }

  return value;
}

const setUnusedValues = (name, value, usedValues) => {
  if (!usedValues.hasOwnProperty(name)) {
    usedValues[name] = [];
  }
  usedValues[name].push(value);
}

const getRandFromArray = (array, name, usedValues) => {
  let value = tryGetUnusedValue(array, name, usedValues);
  setUnusedValues(name, value, usedValues);
  return value;
}

const randomRange = (min, max) => { return Math.floor(Math.random() * (max - min) + min) };

const simple = (usedValues) => {

  let line = `The ${getRandFromArray(data.adjective, "adjective", usedValues)} 
                ${getRandFromArray(data.concrete_noun, "concrete_noun", usedValues)} 
                ${getRandFromArray(data.verb, "verb", usedValues)} 
                ${getRandFromArray(data.preposition, "preposition", usedValues)} 
                ${getRandFromArray(data.article, "article", usedValues)} 
                ${getRandFromArray(data.adjective, "adjective", usedValues)} 
                ${getRandFromArray(data.common_noun, "common_noun", usedValues)}`;
  return line;
}

const simple1 = (usedValues) => `${getRandFromArray(data.article, "article", usedValues)} 
                             ${getRandFromArray(data.concrete_noun, "concrete_noun", usedValues)} 
                             ${getRandFromArray(data.verb, "verb", usedValues)}`

const simple2 = (usedValues) => `${getRandFromArray(data.proper_noun, "common_noun", usedValues)} 
                             ${getRandFromArray(data.verb, "verb", usedValues)} 
                             ${getRandFromArray(data.preposition, "preposition", usedValues)} 
                             ${getRandFromArray(data.article, "article", usedValues)} 
                             ${getRandFromArray(data.adjective, "adjective", usedValues)} 
                             ${getRandFromArray(data.common_noun, "common_noun", usedValues)}`

const simple3 = (usedValues) => `${getRandFromArray(data.article, "article", usedValues)} 
                             ${getRandFromArray(data.common_noun, "common_noun", usedValues)} 
                             ${getRandFromArray(data.verb, "verb", usedValues)} 
                             ${getRandFromArray(data.preposition, "preposition", usedValues)} 
                             ${getRandFromArray(data.article, "article", usedValues)} 
                             ${getRandFromArray(data.concrete_noun, "concrete_nou", usedValues)}`

const simple4 = (usedValues) => simple(usedValues) + ", " + simple3(usedValues);

const simple5 = (usedValues) => {
  const noun = getRandFromArray(data.concrete_noun, "concrete_noun", usedValues);
  const f = "aeiou".includes(noun[0]) ? "An" : "A";
  return `${f} ${noun} ${getRandFromArray(data.verb, "verb", usedValues)}`
};

const toSentenceCase = (s) => s
  .split(' ')
  .map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(" ");


const createPoem = () => {
  const numLines = randomRange(4, 10);
  let d = {};
  d.numberOfLines = numLines + 1;
  d.lines = [];
  d.usedValues = {};
  console.log("init", d.usedValues);
  d.allData = data;
  for (let i = 0; i < numLines + 1; i++) {
    const numType = randomRange(0, 6);
    const lineInfo = {};
    if (numType === 0) { lineInfo.text = toSentenceCase(simple(d.usedValues) + "."); }
    else if (numType === 1) { lineInfo.text = toSentenceCase(simple1(d.usedValues) + "."); }
    else if (numType === 2) { lineInfo.text = toSentenceCase(simple2(d.usedValues) + "."); }
    else if (numType === 3) { lineInfo.text = toSentenceCase(simple3(d.usedValues) + "."); }
    else if (numType === 4) { lineInfo.text = simple4(d.usedValues) + "." }
    else if (numType === 5) { lineInfo.text = simple5(d.usedValues) + "." }
    lineInfo.type = numType + 1;
    d.lines.push(lineInfo);
  }
  console.log("end it", d.usedValues);
  return d;
}

export default createPoem;