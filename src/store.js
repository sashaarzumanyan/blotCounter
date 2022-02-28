import { createStore } from "redux";



function foo(state = [ { a: 'A team', b: 'B team', x: 'X count' }], action) {
    if (action.type === "ADD_NUMBER") {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

let store = createStore(foo)

export default store