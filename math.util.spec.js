const { add, square } = require("./math.util.js");
const fc = require("fast-check");

test("add 함수 테스팅", () => {
  expect(add(1, 2)).toBe(3);
});

test("add 함수 fast-check 테스팅", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      console.log({ a, b });
      expect(add(a, b)).toBe(a + b);
      expect(add(b, a)).toBe(b + a);
    })
  );
});
