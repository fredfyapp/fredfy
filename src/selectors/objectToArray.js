export default object => {
  let array = [];
  for (let [key, value] of Object.entries(object)) {
    array.push(value);
  }
  return array;
};
