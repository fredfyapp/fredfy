export default (finishedSections) => {
  let notFinished = 0;

  if (Object.keys(finishedSections).length === 0) {
    return false;
  }

  for (let section in finishedSections) {
    finishedSections[section] === false && notFinished++;
  }
  return notFinished === 0 ? true : false;
}
