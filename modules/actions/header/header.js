// @flow
import type {ActionType} from 'constants/flow/flowTypes';

/**
 * Set status header
 * @param {boolean} status - state header
 * @returns {ActionType} - Action
 */
export function stickyHeader(status: boolean): ActionType {
    return {
        type: 'STICKY_HEADER',
        payload: {status}
    };
}
