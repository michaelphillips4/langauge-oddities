
const getRandFromArrayInner = (array: string[]) =>
  array[Math.floor(Math.random() * array.length - 1 + 1)];

export const tryGetUnusedValue = (
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

  export const setUnusedValues = (
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

