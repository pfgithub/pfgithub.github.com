import "github-markdown-css";
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React from "react";
import { BasicPage, CenteredContent, Footer, HeaderButtons } from "../../src/basic_page";
import { Project, ProjectID, projects, RichtextSpan } from "../../src/projects";
import { RichtextSpans } from "../../src/richtext";
import { ShowCond } from "../../src/solid";
import {transform, h, getAttr, hasClass, withAttr} from 'html-ast-transform';

function baseurl(base: string, url: string) {
    try {
        const res = new URL(url, base);
        return res.href;
    }catch(e) {
        return "error:Error Bad Link.";
    }
}

async function parseGFM(repo: string, branch: string, text: string): Promise<string> {
    return transform(await fetch("https://api.github.com/markdown", {
        method: "POST",
        body: JSON.stringify({
            text: text,
            mode: "markdown",
        }),
    }).then(r => r.text()), {
        replaceTags: {
            a: node => {
                const href = getAttr(node, "href");
                if(href) node = withAttr(node, "href",
                    baseurl("https://github.com/"+repo+"/blob/"+branch+"/", href),
                );
                node = withAttr(node, "target", "_blank");
                node = withAttr(node, "rel", "noopener noreferrer");
                return node;
            },
            img: node => {
                const src = getAttr(node, "src");
                if(src) return withAttr(node, "src",
                    baseurl("https://raw.githubusercontent.com/"+repo+"/"+branch+"/", src),
                );
            }
        },
    });
}

type Query = {
    proj_id: string,
};

export const getStaticPaths: GetStaticPaths<Query> = async () => {
    return {
        paths: Object.entries(projects).map(([proj_id]) => {
            return {
                params: {proj_id},
            };
        }),
        fallback: false, // paths that are not listed will 404
    };
}

export const getStaticProps: GetStaticProps<Props, Query> = async (ctx): Promise<GetStaticPropsResult<Props>> => {
    const proj_id_any = ctx.params!.proj_id;
    const project = (projects as {[key: string]: Project})[proj_id_any];
    if(!project) return {notFound: true};
    const proj_id = proj_id_any as ProjectID;
    return {
        props: {
            proj_id,
            project,
            project_readme: project.github != null ? {
                text: await parseGFM(
                    project.github.repo,
                    project.github.branch,
                    await fetch(
                        "https://raw.githubusercontent.com/"+project.github.repo+"/"+project.github.branch+"/README.md",
                    ).then(r => r.text()),
                )
            } : null,
            // TODO: fetch the markdown from github
        },
    };
}

export type Props = {
    proj_id: ProjectID,
    project: Project,
    project_readme: {text: string} | null,
};

function getText(els: RichtextSpan[]): string {
    return els.map(el => {
        if(typeof el === "string") {
            return el;
        }
        return getText(el.c);
    }).join("");
}

function ExternalIcon(): JSX.Element {
    return <div class="inline-block align-bottom text-white">
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <g strokeWidth="2.1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline>
                <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path>
            </g>
        </svg>
    </div>;
}
export default function ProjectPage(props: Props): JSX.Element {
    // TODO different colors for different things
    // and multiple buttons
    //
    // an interactive link should be `bg-gradient-to-r from-green-500 to-green-600 text-white`
    // kinda like a play button or something
    // eg for something interactive like progsim or masc (once I add a web demo to masc)
    //
    // a source code link should be `...`
    return <>
        <Head>
            <title>{props.project.title}</title>
            <meta name="description" content={getText(props.project.body)} />
        </Head>
        <header
            style={{
                backgroundImage: "url("+JSON.stringify(props.project.img[2])+")",
            }}
            class="bg-fixed" // they added background attachment they could have made it a % at the same time
            // but no. the only way to do pure css parallax is to disable body scrolling, which is bad on
            // mobile because it means the url bar never auto hides
        ><div class="bg-gray-800 bg-opacity-90 text-gray-300">
            <HeaderButtons title={props.project.title} parent={{ name: "pfg's homepage", href: "/" }} />
            <CenteredContent>
                <div class="mb-3">
                    <a
                        class="inline-block bg-gradient-to-r from-green-500 to-green-600 p-4 px-8 rounded-md text-white"
                        href={props.project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalIcon />
                        {" "}View Project
                    </a>
                </div>
            </CenteredContent>
        </div></header>
        <main class="bg-gray-300 min-h-screen">
            <CenteredContent>
                <p class="mb-3">
                    <RichtextSpans els={props.project.body} />
                </p>
                <ShowCond when={props.project_readme}>{readme => (
                    <div
                        class="markdown-body -mx-4 sm:mx-0 bg-white sm:rounded-xl p-10"
                        dangerouslySetInnerHTML={{__html: readme.text}}
                    />
                )}</ShowCond>
            </CenteredContent>
        </main>
        <Footer />
    </>;
}
