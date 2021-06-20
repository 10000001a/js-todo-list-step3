import { UPDATE_TEAM_LIST } from "./actions.js";

const initialState = {
  teamList: [],
  selectedTeam: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEAM_LIST:
      return {
        ...state,
        teamList: action.teamList,
      };
    default:
      return {};
  }
}
