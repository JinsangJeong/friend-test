// rank.js

// Actions
const ADD_USER_NAME = "rank/ADD_USER_NAME";
const ADD_USER_MSG = "rank/ADD_USER_MSG";
const ADD_RANK = "rank/ADD_RANK";
const GET_RANK = "rank/GET_RANK";

// InitialState
const initialState = {
  user_name: "",
  user_message: "",
  user_score: "",
  score_text: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  ranking: [{ score: 40, name: "임민영", message: "안녕 르탄아!" }],
};

// Action Creators
export function addUserName(user_name) {
  return { type: ADD_USER_NAME, user_name };
}

export function addUserMsg(user_msg) {
  return { type: ADD_USER_MSG, user_msg };
}

export function addRank(rank_info) {
  return { type: ADD_RANK, rank_info };
}

export function getRank(rank_list) {
  return { type: GET_RANK, rank_list };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "rank/ADD_USER_NAME": {
      return { ...state, user_name: action.user_name };
    }
    case "rank/ADD_USER_MSG": {
      return { ...state, user_message: action.user_msg };
    }
    case "rank/ADD_RANK": {
      return { ...state, ranking: [...state.ranking, action.rank_info] };
    }
    case "rank/GET_RANK": {
      return { ...state, ranking: action.rank_list };
    }
    default:
      return state;
  }
}
