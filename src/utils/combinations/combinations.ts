export enum Combination {
    Pair = "Pair",
    TwoPair = "TwoPair",
    Nothing = "Nothing",
}

type Obj = {
    [key: number]: number;
}

export const calcCombination = (combinations: Array<number>) => {
    const res = combinations.reduce((acc, el) => {
        acc[el] = acc[el] || 0;
        acc[el] += 1;
        return acc;
    }, {} as Obj)
    const filteredRes: Obj = {};
    for (let i in res) {
        if (res[i] > 1) filteredRes[i] = res[i];
    }
    return Object.keys(filteredRes).length !== 0 ? Combination.Pair : Combination.Nothing;
}

