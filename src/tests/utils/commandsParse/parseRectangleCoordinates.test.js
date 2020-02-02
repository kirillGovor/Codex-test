/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { parseRectangleCoordinates } from "../../../utils/parseCommands/parseCommands";

const canvas = "r 1 5 1 9";
const result = { x1: 0, y1: 4, x2: 0, y2: 8 };

describe("createCanvas", () => {
    it("should return object with width and height canvas", () => {
        expect(parseRectangleCoordinates(canvas)).toMatchObject(result);
    });
});
