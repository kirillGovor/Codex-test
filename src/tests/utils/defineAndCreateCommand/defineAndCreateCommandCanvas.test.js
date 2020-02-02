/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { defineAndCreateCommand } from "../../../utils/commands/defineAndCreateCommand";

const defaultArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


describe("define and create canvas", () => {
    it("should define canvas and create it", () => {
        const value = "c 3 3";
        const result = {
            newArray: [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]
            ],
            stepArray: [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]
            ],
            isNewcanvas: true
        };
        expect(defineAndCreateCommand(value, defaultArray)).toMatchObject(result);
    });
});
