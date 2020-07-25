import { all, call, put, takeLatest } from 'redux-saga/effects';
import InitAction from '../actions/initActions';



function* init()
{
    yield put(InitAction.Action(InitAction.Types.RUN));
}


export default function* initSession()
{
    yield all(
        yield takeLatest(InitAction.Types.RUN, init),
    );
}
