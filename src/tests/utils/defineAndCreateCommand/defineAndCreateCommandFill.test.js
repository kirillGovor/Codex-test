/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { defineAndCreateCommand } from "../../../utils/commands/defineAndCreateCommand";

const defaultArray = [
    [" ", "x", " "],
    [" ", "x", " "],
    ["x", "x", " "]
];


describe("define and create Fill", () => {
    it("should define Fill and create it", () => {
        const value = "B 3 1 o";
        const result = {
            newArray: [
                [" ", "x", "o"],
                [" ", "x", "o"],
                ["x", "x", "o"]
            ],
            stepArray: [
                [" ", "x", "o"],
                [" ", "x", "o"],
                ["x", "x", "o"]
            ],
            isNewcanvas: false
        };
        expect(defineAndCreateCommand(value, defaultArray)).toMatchObject(result);
    });
});
