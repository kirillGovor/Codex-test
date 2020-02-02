/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { parseFillCoordinatesWithValueColor } from "../../../utils/parseCommands/parseCommands";

const canvas = "b 1 1 k";
const result = { x:0, y:0, c:"k" };

describe("createCanvas", () => {
    it("should return object with width and height canvas", () => {
        expect(parseFillCoordinatesWithValueColor(canvas)).toMatchObject(result);
    });
});
