export default originalArray => {
  for (let i = originalArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
  }
  console.log(originalArray);
  return originalArray;
};
