function removeElement(Arr, num) {
    let index = Arr.indexOf(num);
    if (index !== -1) {
      Arr.splice(index, 1);
    }
    return Arr;
  }
  
  let Arr = [1, 2, 3, 4, 5];
  let numToRemove = 3;
  let newArr = removeElement(Arr, numToRemove);
  console.log(newArr); //[1, 2, 4, 5]

  
  function countDigits(num) {
    let count = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      count++;
    }
    return count;
  }
  
  let num = 12345;
  let digitCount = countDigits(num);
  console.log(digitCount); // 5

  function findLargestNumber(Arr) {
    let max = Arr[0];
    for (let i = 1; i < Arr.length; i++) {
      if (Arr[i] > max) {
        max = Arr[i];
      }
    }
    return max;
  }
  
  let arr = [10, 20, 30, 40, 50];
  let largestNumber = findLargestNumber(arr);
  console.log(largestNumber); //50
  