const {findTwoSum} = require('./index')

describe('findTwoSum', () => {
    describe('Given nums = [2, 7, 11, 15] and target 9', () => {
        it('should return [1,2]', () => {
            expect(findTwoSum([2, 7, 11, 15], 9)).toEqual([0,1])
        });
    });

    describe('Given nums = [11, 15, 2, 7] and target 9', () => {
        it('should return [2,3]', () => {
            expect(findTwoSum([11, 15, 2, 7], 9)).toEqual([2,3])
        });
    });

    describe('Given nums = [11, 15, 2, 7] and target 9', () => {
        it('should return [7, 8]', () => {
            expect(findTwoSum([11, 16, 30, 20, 11, 46, 15, 2, 7, 4, 9], 9)).toEqual([7,8])
        });
    });
});