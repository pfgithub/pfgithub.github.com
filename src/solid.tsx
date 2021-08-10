import React from "react";

// delete these after migration and remove all the key= stuff
export function For<T>(props: {each: T[], children: (v: T, i: () => number) => JSX.Element}): JSX.Element {
    // if I wanted to do a real <For> I could do auto-keying by putting array items
    // into a map saved with useRef, but it's not worth it because I'll be switching
    // to solid once solid-starter has ssr support.
    return <>{props.each.map((v, i) => props.children(v, () => i))}</>;
}
export function ShowBool(props: {when: boolean, children: React.ReactNode}): JSX.Element {
    return <React.Fragment>{props.when ? props.children : null}</React.Fragment>;
}
export function ShowCond<T>(props: {when: T | undefined | null, children: (v: T) => React.ReactNode}): JSX.Element {
    return <React.Fragment>{props.when != null ? props.children(props.when) : null}</React.Fragment>;
}