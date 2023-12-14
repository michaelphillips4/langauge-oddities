import {tryGetUnusedValue,setUnusedValues} from "./usedValues"

export const randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

export const toSentenceCase = (s: string) =>
  s.split(" ").map((word, i) =>
      i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    ).join(" ");  


export const getRandFromArray = (
      array: string[],
      name: string,
      usedValues: Map<string, string[]>
    ) => {
      let value = tryGetUnusedValue(array, name, usedValues);
      setUnusedValues(name, value, usedValues);
      return value;
    };
