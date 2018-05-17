import request from 'axios';

/**
 * Get current status of user (logged or not)
 * @returns {{type: string, payload: (*|Function|Object)}} Current status of user
 */
export function getCatalog() {
    return {
        type: 'GET_CATALOG',
        payload: {
            data: {
                item: 'catalog'
            }
        }
    };
}
