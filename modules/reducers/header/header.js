// @flow
import type {ActionType} from 'constants/flow/flowTypes';
import {STICKY_HEADER} from 'constants/actionTypes';

/**
 * Set sticky header
 * @param {boolean} state - previous state
 * @param {ActionType} action - dispatched action
 * @returns {boolean} - new state
 */
export default function stickyHeader(state: boolean = false, action: ActionType): boolean {
    switch (action.type) {
        case STICKY_HEADER:
            return action.payload.status;

        default:
            return state;
    }
}
