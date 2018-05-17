/**
 * Catalog reducer
 * @param {object} state Current state
 * @param {AjaxActionType} action Received action
 * @returns {{}} state New state
 */
export default function catalog(state = {}, action) {
    switch (action.type) {
        case 'GET_CATALOG':
            return Object.assign({}, state, action.payload.data);
        default:
            return state;
    }
}
