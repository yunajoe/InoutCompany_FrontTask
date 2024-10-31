const duplicatedValueArr: number[] = [];
//  배열 오름차수 정렬 함수
const sortAscending = (arr: number[]) => {
  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (b < a) {
      return 1;
    }
    return 0;
  });
};

// 최종적으로 selected array를 기존의 배열에서 정렬하는 함수
const shiftArrToLeft = (dataArr: number[], selectedArr: number[]) => {
  sortAscending(selectedArr);

  for (let i = 0; i < dataArr.length; i++) {
    if (!selectedArr.includes(dataArr[i])) {
      selectedArr.push(dataArr[i]);
    }
  }
  console.log(selectedArr);
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
