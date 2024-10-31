type QuestionArrType = QuestionObject[];
type QuestionObject = {
  disagree: string;
  agree: string;
  text: string;
};

type MbtiObj = {
  [index: string]: number;
};

const readline = require("readline");
const choiceQuestions =
  "1.매우아니다 2. 아니다 3. 보통이다 4. 그렇다 5. 매우 그렇다";
const userAnswer: number[] = [];
const questions = [
  {
    disagree: "E",
    agree: "I",
    text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`,
  },
  {
    disagree: "S",
    agree: "N",
    text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.`,
  },
  {
    disagree: "T",
    agree: "F",
    text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.`,
  },
  {
    disagree: "J",
    agree: "P",
    text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.`,
  },
  {
    disagree: "E",
    agree: "I",
    text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.`,
  },
  {
    disagree: "S",
    agree: "N",
    text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.`,
  },
  {
    disagree: "T",
    agree: "F",
    text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.`,
  },
  {
    disagree: "J",
    agree: "P",
    text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.`,
  },
];
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
console.log(); // 한 줄 띄우기
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
    userAnswer.push(Number(answer));
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
