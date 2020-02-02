/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { createLine } from "../../../utils/commands/createLine";

const coordinates = {
    x1: 0,
    y1: 0,
    x2: 2,
    y2: 0
};
const arrayData = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

const result = [
    ["x", "x", "x"],
    [" ", " ", " "],
    [" ", " ", " "]
];

describe("createLine", () => {
    it("should create a line using coordinates and array", () => {
        expect(createLine(coordinates, arrayData)).toMatchObject(result);
    });
});
