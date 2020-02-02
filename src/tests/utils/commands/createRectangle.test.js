/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { createRectangle } from "../../../utils/commands/createRectangle";

        const coordinates = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        const arrayData = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];

        const result = [
            ["x", "x", " "],
            ["x", "x", " "],
            [" ", " ", " "]
        ];

describe("createRectangle", () => {
    it("should create a rectangle using coordinates and array", () => {
        expect(createRectangle(coordinates, arrayData)).toMatchObject(result);
    });
});
