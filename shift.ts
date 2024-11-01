const shiftArrToLeft = (arr: number[], selected: number[]) => {
  let selectedCount = 0;

  for (let i = 1; i < arr.length; i++) {
    if (!selected.includes(arr[i])) {
      continue;
    }
    if (selected.includes(arr[i - 1])) {
      continue;
    }
    selectedCount++;
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];

    if (selectedCount >= selected.length) {
      break;
    }
  }
  console.log(arr);
};

//test
shiftArrToLeft([1, 2, 3], [1]);
shiftArrToLeft([1, 2, 3], [2]);
shiftArrToLeft([1, 2, 3], [3]);
shiftArrToLeft([1, 2, 3], [1, 2]);
shiftArrToLeft([1, 2, 3], [2, 1]);
shiftArrToLeft([1, 2, 3], [1, 3]);
shiftArrToLeft([1, 2, 3], [3, 1]);
shiftArrToLeft([1, 2, 3], [2, 3]);
shiftArrToLeft([1, 2, 3], [3, 2]);
shiftArrToLeft([1, 2, 3], [1, 2, 3]);
