import {calcCombination, Combination} from "./combinations";

describe('123', () => {
    test('should return nothing', () => {
        const topPairCombination = [1, 2, 3, 6, 4];
        expect(calcCombination(topPairCombination)).toEqual(Combination.Nothing);
    });

    test('should return top pair', () => {

        const topPairCombination = [1, 2, 3, 3, 4];
        expect(calcCombination(topPairCombination)).toEqual(Combination.Pair);
    });
});


