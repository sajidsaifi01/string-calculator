const { add } = require("./Assessment");

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});

