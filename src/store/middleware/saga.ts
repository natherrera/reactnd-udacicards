import { race, take, delay } from 'redux-saga/effects';

export function* waitForEvery(types: Array<any>, times: number, timeout: number = 0): IterableIterator<any>
{
    let results: Array<any> = [];
    while (times-- > 0)
    {
        results.push(
            yield race(types.reduce((awaiter, actionType) =>
            {
                awaiter[actionType] = take(actionType);

                return awaiter;
            },
            timeout === 0 ? {} : { timeout: delay(timeout) }))
        );
    }

    return results;
}
