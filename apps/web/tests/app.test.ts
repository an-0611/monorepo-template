// apps/web/tests/app.test.ts
import { describe, it, expect } from "vitest";
import { sum } from "../utils"; // 假設你有這個檔案

describe("sum function", () => {
  it("should return correct sum", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
