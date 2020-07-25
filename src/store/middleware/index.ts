import { all } from 'redux-saga/effects';
import deck from './deck';

export default function* combineMiddleware()
{
    yield all([
        deck(),
    ]);
}
