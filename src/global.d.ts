interface IData {
    players: number;
    combinations: IRounds;
    round: number;
}

type ICombinations = {
    [key: number]: Array<number>;
}

type IRounds = {
    [key: number]: Array<ICombinations>;
}