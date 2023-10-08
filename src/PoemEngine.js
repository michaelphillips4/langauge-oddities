import data from "./Data/SentenceParts.json";

class PoemEngine {

  constructor() {
    this.usedValues = {}; 
  }

  getRandFromArrayInner = (array) => { return array[Math.floor((Math.random() * array.length - 1) + 1)]; }

  tryGetUnusedValue = (array, name) => {

    let value = this.getRandFromArrayInner(array);
 
    if (this.usedValues.hasOwnProperty(name) && this.usedValues[name].length < array.length) {

      while (this.usedValues[name].includes(value)) {
        value = this.getRandFromArrayInner(array);
      }
    }

    return value;
  }

  setUnusedValues(name, value) {
    if (!this.usedValues.hasOwnProperty(name)) {
      this.usedValues[name] = [];
    }
    this.usedValues[name].push(value);
  } 

  getRandFromArray(array, name) {
    let value = this.tryGetUnusedValue(array, name);
    this.setUnusedValues(name, value);
    return value;
  }

  randomRange(min, max) { return Math.floor(Math.random() * (max - min) + min) };

  simple = () => `The ${this.getRandFromArray(data.adjective, "adjective")} ${this.getRandFromArray(data.concrete_noun, "concrete_noun")} ${this.getRandFromArray(data.verb, "verb")} ${this.getRandFromArray(data.preposition, "preposition")} ${this.getRandFromArray(data.article, "article")} ${this.getRandFromArray(data.adjective, "adjective")} ${this.getRandFromArray(data.common_noun, "common_noun")}`

  simple1 = () => `${this.getRandFromArray(data.article, "article")} ${this.getRandFromArray(data.concrete_noun, "concrete_noun")} ${this.getRandFromArray(data.verb, "verb")}`

  simple2 = () => `${this.getRandFromArray(data.proper_noun, "common_noun")} ${this.getRandFromArray(data.verb, "verb")} ${this.getRandFromArray(data.preposition, "preposition")} ${this.getRandFromArray(data.article, "article")} ${this.getRandFromArray(data.adjective, "adjective")} ${this.getRandFromArray(data.common_noun, "common_noun")}`

  simple3 = () => `${this.getRandFromArray(data.article, "article")} ${this.getRandFromArray(data.common_noun, "common_noun")} ${this.getRandFromArray(data.verb, "verb")} ${this.getRandFromArray(data.preposition, "preposition")} ${this.getRandFromArray(data.article, "article")} ${this.getRandFromArray(data.concrete_noun, "concrete_nou")}`

  simple4 = () => this.simple() + ", " + this.simple3()

  simple5 = () => {
    const noun = this.getRandFromArray(data.concrete_noun, "concrete_noun");
    const f = "aeiou".includes(noun[0]) ? "An" : "A";
    return `${f} ${noun} ${this.getRandFromArray(data.verb, "verb")}`

  }

  toSentenceCase = (s) => s
    .split(' ')
    .map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(" ");


  createPoem = () => {
    const numLines = this.randomRange(4, 10);
    let d = {};
    d.numberOfLines = numLines + 1;
    d.lines = [];
    d.usedValues = this.usedValues;
    d.allData = data;
    for (let i = 0; i < numLines + 1; i++) {
      const numType = this.randomRange(0, 6);
      const lineInfo = {};
      if (numType === 0) { lineInfo.text = this.toSentenceCase(this.simple() + "."); }
      else if (numType === 1) { lineInfo.text = this.toSentenceCase(this.simple1() + "."); }
      else if (numType === 2) { lineInfo.text = this.toSentenceCase(this.simple2() + "."); }
      else if (numType === 3) { lineInfo.text = this.toSentenceCase(this.simple3() + "."); }
      else if (numType === 4) { lineInfo.text = this.simple4() + "." }
      else if (numType === 5) { lineInfo.text = this.simple5() + "." }
      lineInfo.type = numType + 1;
      d.lines.push(lineInfo);
    }
    return d;
  }


}

export default function nextPoem(){

  const poemEngine = new PoemEngine(); 
  return poemEngine.createPoem();

}