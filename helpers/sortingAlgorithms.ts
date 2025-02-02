// * recursive merge sort:
// const mergeSort = (arr: number[]) => {
//   const newArr: number[] = [...arr];
//   if (newArr.length === 1) return newArr;
//   const mid = Math.floor(newArr.length / 2);
//   const leftArr: number[] = mergeSort(newArr.slice(0, mid));
//   const rightArr: number[] = mergeSort(newArr.slice(mid));
//   return merge(leftArr, rightArr);
// };

// const merge = (leftArr: number[], rightArr: number[]) => {
//   const sortedArr: number[] = [];

//   let i = 0;
//   let j = 0;
//   while (i < leftArr.length && j < rightArr.length) {
//     if (leftArr[i] < rightArr[j]) {
//       sortedArr.push(leftArr[i++]);
//     } else {
//       sortedArr.push(rightArr[j++]);
//     }
//   }
//   while (i < leftArr.length) sortedArr.push(leftArr[i++]);
//   while (j < rightArr.length) sortedArr.push(rightArr[j++]);
//   return sortedArr;
// };

// * Iterative merge sort
const mergeSort = (arr: number[]) => {
  //Create two arrays for sorting
  let sorted = Array.from(arr);
  let n = sorted.length;
  let buffer = new Array(n);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      //Get the two sub arrays
      let left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n);

      //Merge the sub arrays
      merge(left, right, leftLimit, rightLimit, sorted, buffer);
    }

    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
  }

  return sorted;
};
const merge = (
  left: number,
  right: number,
  leftLimit: number,
  rightLimit: number,
  sorted: number[],
  buffer: number[]
) => {
  let i = left;

  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    if (sorted[left] <= sorted[right]) {
      buffer[i++] = sorted[left++];
    } else {
      buffer[i++] = sorted[right++];
    }
  }

  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++];
  }
};

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
};

const bubbleSort = (arr: number[]) => {
  arr = shuffleArray(arr);
  for (let i = 0; i < arr.length; i++) {
    //loop through array again testing currentValue against next value in array
    for (let j = 0; j < arr.length; j++) {
      //if the next value is bigger set the current value to the bigger value
      if (arr[j] > arr[j + 1]) {
        //swap values as we go through the array
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const insertionSort: (arr: number[]) => number[] = (arr: number[]) => {
  arr = shuffleArray(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

const shuffleArray = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

// console.log('mergeSort -> ', mergeSort(data));

export { mergeSort, selectionSort, bubbleSort, insertionSort };
