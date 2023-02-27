function checkEquality(a, b, c) {
    if ((a === b && b === c) || (a !== b && b !== c && a !== c)) {
      return false;
    }
    return true;
  }
  function checkEquality(a, b, c) {
    if ((a == b || b == c || a == c) || (a !== b && b !== c && a !== c)) {
      return true;
    }
    return false;
  }
  function getDaysInMonth(month, year) {
    if (month == 2) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 29;
      }
      return 28;
    } else if ([4, 6, 9, 11].includes(month)) {
      return 30;
    } else {
      return 31;
    }
  }
  
  console.log(getDaysInMonth(2, 2020)); // ke dade: 29
  console.log(getDaysInMonth(2, 2021)); // ke dade: 28
  console.log(getDaysInMonth(4)); // ke dade: 30
      