export interface IAction<Payload> {
  readonly type: string
  readonly payload: Payload | undefined
  readonly key: string
}

export interface IActionVault<Type, Payload> {
  readonly Type: Type
  readonly Action: (type: string, payload?: Payload) => IAction<Payload>
  readonly Key: string
}
