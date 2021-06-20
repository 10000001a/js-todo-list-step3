export function createStore(reducer) {
  let state;

  const listeners = [];

  const subscribe = (subscriber) => {
    listeners.push({
      subscriber,
    });
  };

  const publish = () => {
    listeners.forEach(({ subscriber }) => {
      subscriber.call();
    });
  };

  const getState = () => ({ ...state });

  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}
