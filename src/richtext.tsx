import React from "react";
import { LinkOut } from "./link_out";
import { RichtextSpan } from "./projects";
import { For } from "./solid";

export function RichtextSpans(props: {els: RichtextSpan[]}): JSX.Element {
    return <For each={props.els}>{(el, i) => <React.Fragment key={i()}>{
        typeof el === "string" ? (
            <>{el}</>
        ) : (
            <LinkOut href={el.url}><RichtextSpans els={el.c} /></LinkOut>
        )
    }</React.Fragment>}</For>
}
