export const calNewSnowLastDay = (data) => {
  let snow = data[0];
  let newSnowArray = [];
  let difference;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < snow && !undefined) {
      difference = snow - data[i];
      newSnowArray.push(difference);
    }
    snow = data[i];
  }
  return newSnowArray;
}