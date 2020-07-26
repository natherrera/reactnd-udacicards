import { IAction, IActionVault } from './types/deck';
import uuid from 'react-native-uuid';

export function CreateAction<P>(key: string, type: string, payload?: P): IAction<P>
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

export function CreateActionTypes(obj: any): any
{
    let types = {};

    for (const key of obj)
        types[key] = `${obj[key]}:${uuid.v1()}`;

    return types;
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

export function MakeUnique(obj: any): any
{
    for (const key of Object.keys(obj))
        obj[key] = `${key}:${uuid.v1()}`;

    return obj;
}

export class ActionVault<Type, Payload> implements IActionVault<Type, Payload>
{
    constructor(key: string, type: Type)
    {
        this.Key = key;
        this.Type = MakeUnique(type);
    }

    Key: string;

    Type: Type;


    Action: (type: string, payload?: Payload) => IAction<Payload> = (type: string, payload?: Payload): IAction<Payload> => CreateAction(this.Key, type, payload);
}

