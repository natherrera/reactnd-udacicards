import { all } from 'redux-saga/effects';
import initSession from './init';

export default function* combineMiddleware()
{
    yield all([
        initSession(),
    ]);
}
