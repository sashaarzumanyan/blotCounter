import { createStore } from "redux";



function foo(state = [ { a: 1, b: 1, x: 1 }], action) {
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