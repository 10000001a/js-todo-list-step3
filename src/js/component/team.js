import { updateTeams } from "../actions/index.js";
import requests from "../util/requests.js";

export default function Team(store) {
  const teamTemplate = (name) => `<div class="team-card-container">
  <a href="/kanban.html" class="card">
    <div class="card-title">
      ${name}
    </div>
  </a>
</div>`;

  const teamAddBtn = `<div class="add-team-button-container">
<button id="add-team-button" class="ripple">
  <span class="material-icons">add</span>
</button>
</div>`;

  const $teamListContainer = document.querySelector(".team-list-container");

  const getTeamList = () => {
    return requests.get("/teams");
  };

  const addTeam = (name) => {
    return requests.post("/teams", { name });
  };

  const addBtn = () => {
    document
      .querySelector("#add-team-button")
      ?.addEventListener("click", async () => {
        const result = prompt("팀 이름을 입력해주세요");

        await addTeam(result);

        const newTeamList = await getTeamList();

        store.dispatch(updateTeams(newTeamList));
      });
  };

  const render = () => {
    const teamList = store.getState().teamList;

    $teamListContainer.innerHTML =
      teamList.map((team) => teamTemplate(team.name)).join("") + teamAddBtn;

    addBtn();
  };

  this.init = async () => {
    const teamList = await getTeamList();
    store.subscribe(render);
    store.dispatch(updateTeams(teamList));
  };
}
