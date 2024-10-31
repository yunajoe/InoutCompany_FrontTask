// import { data, selected } from "./utils";

// const duplicatedValueArr: number[] = [];
// //  배열 오름차수 정렬 함수
// const sortAscending = (arr: number[]) => {
//   arr.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (b < a) {
//       return 1;
//     }
//     return 0;
//   });
// };

// //  data와 selected array에서 같은 값을 return하는 함수
// // const findSameValueArr = (dataArr: number[], selectedArr: number[]) => {
// //   sortAscending(selectedArr);
// //   for (let i = 0; i < dataArr.length; i++) {
// //     const idx = dataArr.indexOf(selectedArr[i]);
// //     if (idx !== -1) {
// //       duplicatedValueArr.push(dataArr[idx]);
// //     }
// //   }

// //   return duplicatedValueArr;
// // };

// // 최종적으로 selected array를 기존의 배열에서 정렬하는 함수
// const shiftArrToLeft = (dataArr: number[], selectedArr: number[]) => {
//   let startIndex = 0;
//   // const arr = findSameValueArr(dataArr, selectedArr); // [2,3]

//   while (arr.length > 0) {
//     const value = arr.shift();
//     if (value) {
//       const targetIndex = dataArr.indexOf(value);
//       if (targetIndex !== -1) {
//         dataArr.splice(targetIndex, 1);
//       }
//       dataArr.splice(startIndex, 0, value);
//       startIndex++;
//     }
//   }
// };

// shiftArrToLeft(data, selected);
// console.log("data====>", data);
