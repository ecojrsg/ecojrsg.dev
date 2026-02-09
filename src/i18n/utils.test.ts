import { describe, it, expect } from "bun:test";
import { getLangFromUrl } from "./utils";
import { ui, defaultLang } from "./ui";

describe("getLangFromUrl", () => {
  it("returns default lang for root path", () => {
    const url = new URL("https://example.com/");
    expect(getLangFromUrl(url)).toBe(defaultLang);
  });

  it("returns correct lang for valid language paths", () => {
    const langs = Object.keys(ui) as (keyof typeof ui)[];

    langs.forEach(lang => {
        const url = new URL(`https://example.com/${lang}/about`);
        expect(getLangFromUrl(url)).toBe(lang);
    });
  });

  it("returns default lang for invalid language paths", () => {
    const urlInvalid = new URL("https://example.com/invalid-lang/about");
    expect(getLangFromUrl(urlInvalid)).toBe(defaultLang);
  });

  it("returns correct lang for language only paths", () => {
    const langs = Object.keys(ui) as (keyof typeof ui)[];

    langs.forEach(lang => {
        const url = new URL(`https://example.com/${lang}`);
        expect(getLangFromUrl(url)).toBe(lang);
    });
  });

  it("returns correct lang for nested paths", () => {
    const langs = Object.keys(ui) as (keyof typeof ui)[];

    langs.forEach(lang => {
        const url = new URL(`https://example.com/${lang}/blog/post-1`);
        expect(getLangFromUrl(url)).toBe(lang);
    });
  });
});
