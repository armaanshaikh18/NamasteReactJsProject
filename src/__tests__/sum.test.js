import { SumTest } from "../components/SumTest";

test("sum function should calculate the sum of two numbers", () => {
  const result = SumTest(7, 3);

  expect(result).toBe(10);
});
