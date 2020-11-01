const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
    it("return human years and equivalent cat and dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
    })
})

// Look Ma, no handlebars!!!
