/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { createFill } from "../../../utils/commands/createFill";

const coordinates = {
    x: 2,
    y: 0,
    c: "o"
    };
const arrayData = [
    [" ", "x", " "],
    [" ", "x", " "],
    ["x", "x", " "]
];

const result = [
    [" ", "x", "o"],
    [" ", "x", "o"],
    ["x", "x", "o"]
];

describe("createFill", () => {
    it("should create a fill using coordinates, color and array", () => {
        expect(createFill(coordinates, arrayData)).toMatchObject(result);
    });
});
