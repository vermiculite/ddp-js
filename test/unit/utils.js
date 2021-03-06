var utils = require('../../lib/utils');
var contains = utils.contains;
var uniqueId = utils.uniqueId;

describe("`utils` object", () => {

    describe("`contains` function", () => {

        it("returns true if the first parameter contains the second parameter", () => {
            const array = ["element"];
            const element = "element";
            expect(contains(array, element)).to.equal(true);
        });

        it("returns false if the first parameter doesn't contain the second parameter", () => {
            const array = ["element"];
            const element = "different-element";
            expect(contains(array, element)).to.equal(false);
        });

    });

    describe("`uniqueId` function", () => {

        it("should return a different string each time it's called", () => {
            const ret1 = uniqueId();
            const ret2 = uniqueId();
            expect(ret1).not.to.equal(ret2);
        });

    });

});
