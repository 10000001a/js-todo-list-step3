import requests from "../util/requests.js";

export default function Team(store) {
  console.log("team");
  const teamTemplate = (name) => `<div class="team-card-container">
  <a href="/kanban.html" class="card">
    <div class="card-title">
      ${name}
    </div>
  </a>
</div>`;

  const getTeamList = () => {
    return requests.get("/teams");
  };

  const $addTeamButton = document.querySelector("#add-team-button");
  $addTeamButton.addEventListener("click", () => {
    const result = prompt("팀 이름을 입력해주세요");
  });

  this.init = async () => {
    console.log("team");
    const teamList = await getTeamList();
    console.dir(teamList);
  };
}
