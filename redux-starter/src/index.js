import configureStore from "./store/configureStore";
import { getBugsByUser, loadBugs, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(1, 2));
}, 2000);

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
