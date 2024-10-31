import { MbtiObj, QuestionArrType } from "./type";
import { questions } from "./utils";

const readline = require("readline");
const choiceQuestions =
  "1.매우아니다 2. 아니다 3. 보통이다 4. 그렇다 5. 매우 그렇다";
const userAnswer: number[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 점수 score를 기입할 object
const mbtiObj: MbtiObj = {
  E: 0,
  I: 0,
  N: 0,
  S: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0,
};
console.log("MBTI 설문을 시작하겠습니다.");
console.log();
console.log(`총 ${questions.length}문제 입니다.`);
console.log("\n");

let questionIndex = 0;

//  E vs I, N vs S,  T vs F, J vs P  를 비교하여 우선순위의 엠비티아이를 return하는 함수
const compareTwo = (mbtiObj: MbtiObj) => {
  let result = "";
  //  E vs I
  if (mbtiObj["E"] >= mbtiObj["I"]) {
    result += "E";
  }
  if (mbtiObj["E"] < mbtiObj["I"]) {
    result += "I";
  }
  //  N vs S
  if (mbtiObj["N"] >= mbtiObj["S"]) {
    result += "N";
  }
  if (mbtiObj["N"] < mbtiObj["S"]) {
    result += "S";
  }
  //  T VS F
  if (mbtiObj["F"] >= mbtiObj["T"]) {
    result += "F";
  }
  if (mbtiObj["F"] < mbtiObj["T"]) {
    result += "T";
  }

  //   J vs P
  if (mbtiObj["P"] >= mbtiObj["J"]) {
    result += "P";
  }
  if (mbtiObj["P"] < mbtiObj["J"]) {
    result += "J";
  }

  console.log("당신의 MBTI는 ======> ", result);
};

//  사용자의 인풋을 받아, mbti obj 해당하는 value값을 더하는 것
const calculateScore = (value: number, disagree: string, agree: string) => {
  value = Number(value);
  switch (value) {
    // 매우아니다
    case 1:
      mbtiObj[disagree] += 2;
      break;
    // 아니다
    case 2:
      mbtiObj[disagree] += 1;
      break;
    // 보통이다
    case 3:
      mbtiObj[disagree] += 0;
      mbtiObj[agree] += 0;
      break;
    //  그렇다
    case 4:
      mbtiObj[agree] += 1;
      break;
    // 매우 그렇다
    case 5:
      mbtiObj[agree] += 2;
      break;
  }
};

// 사용자에게 질문하고 답변을 받는 함수
const MBTIRESULT = (arr: QuestionArrType, questionIndex: number) => {
  const { disagree, agree, text } = arr[questionIndex];

  console.log(text);
  console.log(choiceQuestions);

  rl.question("숫자로 답변해주세요 ===> ", (answer: number) => {
    const choice = Number(answer);
    if (choice === 0 || choice > 5) {
      console.log("1부터 5까지만 기입이 가능합니다");
      console.log("다시 실행해주세요");
      rl.close();
      return;
    }

    userAnswer.push(choice);
    calculateScore(answer, disagree, agree);

    if (userAnswer.length === arr.length) {
      console.log("\n");
      console.log("테스트가 끝났습니다");
      compareTwo(mbtiObj);
      rl.close();
    } else {
      questionIndex++;
      console.log("\n");
      MBTIRESULT(arr, questionIndex);
    }
  });
};

// 실행
MBTIRESULT(questions, questionIndex);
