const merge = (prev, next) => Object.assign({}, prev, next);

const reducer = (state, update) => merge(state, update);

let state = {};
state = reducer(state, { foo: "foo" });

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }
  getState() {
    return this.state;
  }
  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const store = new Store(reducer);
// store.dispatch({ bar: "bar" });
// store.dispatch({ baz: "baz" });
// store.dispatch({ foo: "foo" });
store.dispatch({ type: "UPDATE_USER", payload: { foo: "foo" } });
console.log(store.getState());

//Provider neede for binding . <Provider store ={store}></Provider>
