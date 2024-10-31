// mbti
export type QuestionArrType = QuestionObject[];
export type QuestionObject = {
  disagree: string;
  agree: string;
  text: string;
};

export type MbtiObj = {
  [index: string]: number;
};
