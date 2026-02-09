import { test, expect, mock } from "bun:test";
import { animateCountUp } from "./animate";

mock.module("motion", () => {
    return {
        inView: (element: any, callback: any) => {
            callback({ target: element });
            return () => {};
        },
        animate: (update: any) => {
            update(1);
            return { stop: () => {} };
        }
    };
});

test("animateCountUp updates innerHTML correctly", async () => {
    const element = { innerHTML: "0" };
    // Call with delay 0 so setTimeout runs almost immediately
    animateCountUp(element as any, 10, 0);

    // Wait for the setTimeout callback to execute
    await new Promise(resolve => setTimeout(resolve, 50));

    // The mock animate function calls update(1), so result should be 1 * 10 = 10
    expect(element.innerHTML).toBe("10");
});

test("animateCountUp does nothing if element is null", async () => {
    // Should not throw
    animateCountUp(null, 10, 0);
});
