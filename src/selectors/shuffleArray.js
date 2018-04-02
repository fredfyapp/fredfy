// export default (originalArray, shuffledArray) => {
//     for (let i = originalArray.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
//     }
//     return shuffledArray.push(originalArray);
// }

export default (originalArray) => {
    for (let i = originalArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
    }
    return originalArray;
}
