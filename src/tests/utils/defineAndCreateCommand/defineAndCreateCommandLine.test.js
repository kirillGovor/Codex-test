/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { defineAndCreateCommand } from "../../../utils/commands/defineAndCreateCommand";

const defaultArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


describe("define and create line", () => {
    it("should define line and create it", () => {
        const value = "l 1 1 3 1";
        const result = {
            newArray: [
                ["x", "x", "x"],
                [" ", " ", " "],
                [" ", " ", " "]
            ],
            stepArray:[
                ["x", "x", "x"],
                [" ", " ", " "],
                [" ", " ", " "]
            ],
            isNewcanvas: false
        };
        expect(defineAndCreateCommand(value, defaultArray)).toMatchObject(result);
    });
});
