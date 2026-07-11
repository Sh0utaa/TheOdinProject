function numberChecker(number) {
  let answer = false;
  switch(number) {
    case 1000:
      answer = true;
      break;
    case 10:
      answer = true;
      break;
  }

  return answer;
}

// Do not edit below this line
module.exports = numberChecker;
