export const ACTION_INIT = "INIT";
export const SELECT_TEAM = "SELECT_TEAM";
export const UPDATE_TEAM_LIST = "UPDATE_TEAM_LIST";

export const updateTeamList = (teamList) => ({
  type: UPDATE_TEAM_LIST,
  teamList,
});
