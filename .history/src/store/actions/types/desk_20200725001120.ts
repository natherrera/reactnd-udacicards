export interface Init {
    run: string
    success: string
    error: number
    loading: number
}

export interface InitState {
    init: Init[]
}
