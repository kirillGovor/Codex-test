/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { parseExportFileToText } from "../../../utils/parseExportFileToText/parseExportFileToText";

const defaultArray = [
    [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ],
    [
        [" ", "x", " "],
        [" ", "x", " "],
        [" ", "x", " "],
    ],
    [
        [" ", "x", " "],
        [" ", "x", " "],
        ["x", "x", " "]
    ], [
        [" ", "x", "o"],
        [" ", "x", "o"],
        ["x", "x", "o"]
    ]
];


describe("parseExportFileToText", () => {
    it("should parse export file To text", () => {
        const result = [`-----
|   |
|   |
|   |
-----
`,

            `-----
| x |
| x |
| x |
-----
`,

            `-----
| x |
| x |
|xx |
-----
`,

            `-----
| xo|
| xo|
|xxo|
-----
`

        ];
        expect(parseExportFileToText(defaultArray)).toMatchObject(result);
    });
});
