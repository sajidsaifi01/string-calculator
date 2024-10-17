const { add } = require("./Assessment");

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('Single number returns the number itself', () => {
    expect(add('1')).toBe(1);
});

test('Two numbers separated by a comma return their sum', () => {
    expect(add('1,2')).toBe(3);
});

test('Handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('Supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
});