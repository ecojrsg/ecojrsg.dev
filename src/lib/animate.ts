import { animate, inView } from "motion";

export const animateCountUp = (
    element: Element | null,
    multiplier: number,
    delay: number,
    duration: number = 1
) => {
    if (!element) return;

    // @ts-ignore
    inView(element, ({ target }) => {
        setTimeout(() => {
            animate(
                // @ts-ignore
                (progress) => target.innerHTML = String(Math.round(progress * multiplier)),
                { duration, easing: "ease-out" }
            )
        }, delay)
    })
};
