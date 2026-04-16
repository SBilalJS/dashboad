import { themeSettings, tokens } from "./theme";

describe("tokens", () => {
  test("returns the expected dark mode values", () => {
    const darkTokens = tokens("dark");

    expect(darkTokens.grey[100]).toBe("#e0e0e0");
    expect(darkTokens.primary[500]).toBe("#141b2d");
    expect(darkTokens.greenAccent[500]).toBe("#4cceac");
  });

  test("returns the expected light mode values", () => {
    const lightTokens = tokens("light");

    expect(lightTokens.grey[100]).toBe("#141414");
    expect(lightTokens.primary[400]).toBe("#f2f0f0");
    expect(lightTokens.greenAccent[600]).toBe("#70d8bd");
  });
});

describe("themeSettings", () => {
  test("builds a dark theme palette from the dark tokens", () => {
    const darkTheme = themeSettings("dark");
    const darkTokens = tokens("dark");

    expect(darkTheme.palette.mode).toBe("dark");
    expect(darkTheme.palette.primary.main).toBe(darkTokens.primary[500]);
    expect(darkTheme.palette.secondary.main).toBe(darkTokens.greenAccent[500]);
  });
});