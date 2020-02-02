/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { createDataCanvas } from "../../../utils/commands/createCanvas";

const width = 3;
const height = 3;
const result = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

describe("createCanvas", () => {
    it("should create a canvas using width and height", () => {
        expect(createDataCanvas(width, height)).toMatchObject(result);
    });
});
