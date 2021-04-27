import { createStore } from 'redux'
const stateDefaults = {
    keyword: "",
    username: "",
    role: "",
}

function info(state = stateDefaults, action) {
    console.log('run in keyword')
    switch (action.type) {
        case 'update_keyword':
            return Object.assign(state, { 'keyword': action.value });
        case 'update_username':
            return Object.assign(state, { 'username': action.value });
        case 'update_role':
            return Object.assign(state, { 'role': action.value });
        default:
            return state
    }
}
const store = createStore(info);
store.subscribe(() => { console.log(store.getState()) })
export default store