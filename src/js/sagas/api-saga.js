import {takeEvery , call, put} from "redux-saga/effects"
import {API_ERRORED, DATA_REQUESTED, DATA_LOADED} from "../constants/action-types"

// The watcher is a generator function whatching for every action we are interested in
//In response to that action , the watcher will call a workersaga
export default function* watcherSaga(){
    yield takeEvery(DATA_REQUESTED, workerSaga)
}


function* workerSaga(action){
    try {
        const payload = yield call(getData, action.payload.url)
        yield put({
            type: DATA_LOADED , payload
        })
    } catch (error) {
        yield put({
            type: API_ERRORED, payload: error
        })
    }
}

function getData(url){
    return fetch(url)
    .then(response => response.json())

}