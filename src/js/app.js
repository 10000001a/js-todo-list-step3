import Team from "./component/team.js";
import Kanban from "./component/kanban.js";
import { reducer, createStore } from "./redux/index.js";

export default function App() {
  const currentPathname = window.location.pathname;
  const store = createStore(reducer);

  const router = {
    "/": () => {
      new Team(store).init();
    },
    "/index.html": () => {
      new Team(store).init();
    },
    "/kanban.html": () => {
      new Kanban().init();
    },
  };

  return router[currentPathname]();
}

new App();
