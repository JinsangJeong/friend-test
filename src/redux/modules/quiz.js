// quiz.js

// Actions
const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSER = "quiz/RESET_ANSWER";

// InitialState
const initialState = {
  name: "키아누",
  page: "rank",
  scoreMsg: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  answers: [],
  quiz: [
    { question: "는 42살이다.", answer: "O" },
    { question: "는 LA에 산다.", answer: "O" },
    { question: "는 기혼이다.", answer: "O" },
    { question: "는 데뷔작은 스피드다.", answer: "O" },
    { question: "는 키가 190cm이다.", answer: "O" },
    { question: "는 한국에 온적이 있다.", answer: "O" },
  ],
};

// Action Creators
export function getQuiz(quiz_list) {
  return { type: GET_QUIZ, quiz_list };
}

export function addAnswer(asnwer) {
  return { type: ADD_ANSWER, asnwer };
}

export function resetAnswer() {
  return { type: RESET_ANSER };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }
    case "quiz/ADD_ANSWER": {
      return { ...state, answers: action.answer };
    }
    case "quiz/RESET_ANSWER": {
      return { ...state, answers: [] };
    }
    default:
      return state;
  }
}
