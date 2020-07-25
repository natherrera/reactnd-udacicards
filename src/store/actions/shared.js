
export function createAction(key, type, payload)
{
    return {
        key,
        type,
        payload
    };
}

export function createActionTypesUnique(obj)
{
    let types = {};

    for (const key in obj)
    {
        types[key] = Symbol(obj[key]);
    }

    return Object.freeze(types);
}

export function createActionTypes(storeKey, obj)
{
    let types = {};

    for (const key in obj)
    {
        types[key] = `${ storeKey }_${ obj[key] }`;
    }

    return Object.freeze(types);
}


export function createActionTypesMirroringUnique(array)
{
    return Object.freeze(
        array.reduce((keys, key) => (
            { ...keys, [key]: Symbol(key) }
        ), {})
    );
}


export function createActionTypesMirroring(storeKey, array)
{
    return Object.freeze(
        array.reduce((keys, key) => (
            { ...keys, [key]: `${ storeKey }_${ key }` }
        ), {})
    );
}
