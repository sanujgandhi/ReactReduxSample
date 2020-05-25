import { actionType } from '../../../redux/modules/services';
import sService from '../../../redux/services/sservice';
export function fetchAllServices() {
    return dispatch => sService.fetchALLServices().then(
        (res) => {
            if (res.data) {
                dispatch({ type: actionType.FETCH_SERVICES, data: res.data });
            }
        }
    );
}