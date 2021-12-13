function bubbleSort(array) {
  let isSwapped = false;
  for (let i = 0; i < array.length; i++) {
    isSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
        isSwapped = true;
      }
    }
    console.log(`${i}회전: ${array}`);
    if (!isSwapped) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));