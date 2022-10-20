// business logic
function findFirstLastChar (stringParam) {
  const charNum = stringParam.length - 1;
  const firstLastLetter = (stringParam.charAt(0) + stringParam.charAt(charNum)).toUpperCase();
  window.alert(firstLastLetter);
  return firstLastLetter;
}

function reverseFirstLast (stringChar) {
  const reverse = stringChar.charAt(1) + stringChar.charAt(0);
  return reverse;
}

function runsUserInput (userSentence) {
  const twoChar = findFirstLastChar(inputSentence);
  const reverse = reverseFirstLast(twoChar);
  return reverse;
}

function finalOutput (originalSentence, sentenceChar) {
  const halfNum = (Math.round(originalSentence.length / 2)) - 1;
  const halfLetter = originalSentence.charAt(halfNum);
  window.alert(halfLetter + originalSentence + sentenceChar);
}

// user interface logic
const inputSentence = window.prompt("Enter a sentence:");
const reverseChar = runsUserInput(inputSentence);
window.alert(reverseChar);
finalOutput(inputSentence,reverseChar);




