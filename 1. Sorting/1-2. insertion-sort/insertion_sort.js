//삽입 정렬은 항상 왼쪽 비교 대상 데이터들이 정렬되어있다는 가정하에 진행 됨.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
    console.log(`${i}회전: ${array}`);
  }
  return array;
}
console.log(insertionSort([5, 4, 3, 2, 1]));

