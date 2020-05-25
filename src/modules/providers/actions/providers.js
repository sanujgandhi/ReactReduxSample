import { actionType } from '../../../redux/modules/providers';
import pService from '../../../redux/services/pservice';
export function fetchAllProviders() {
    return dispatch => pService.fetchALLProviders().then(
        (res) => {
            if (res.data) {
                dispatch({ type: actionType.FETCH_PROVIDERS, data: res.data });
            }
        }
    );
}