/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { defineAndCreateCommand } from "../../../utils/commands/defineAndCreateCommand";

const defaultArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


describe("define and create Rectangle", () => {
    it("should define Rectangle and create it", () => {
        const value = "r 1 1 2 2";
        const result = {
            newArray:  [
                ["x", "x", " "],
                ["x", "x", " "],
                [" ", " ", " "]
            ],
            stepArray: [
                ["x", "x", " "],
                ["x", "x", " "],
                [" ", " ", " "]
            ],
            isNewcanvas: false
        };
        expect(defineAndCreateCommand(value, defaultArray)).toMatchObject(result);
    });
});
