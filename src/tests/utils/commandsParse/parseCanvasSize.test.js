/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { parseCanvasSize } from "../../../utils/parseCommands/parseCommands";

const canvas ="c 10 10";
const result ={w:"10", h:"10"};

describe("createCanvas", () => {
    it("should return object with width and height canvas", () => {
        expect(parseCanvasSize(canvas)).toMatchObject(result);
    });
});
