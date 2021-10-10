import "github-markdown-css";
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React, { useCallback, useEffect, useRef } from "react";
import { BasicPage, CenteredContent, Footer, HeaderButtons } from "../../src/basic_page";
import { GithubInfo, Project, ProjectID, projects, RichtextSpan, technologies, TechnologyName } from "../../src/projects";
import { RichtextSpans } from "../../src/richtext";
import { For, ShowBool, ShowCond } from "../../src/solid";
// import {transform, h, getAttr, hasClass, withAttr} from 'html-ast-transform';
import parse5 from "parse5";

function baseurl(base: string, url: string) {
    try {
        const res = new URL(url, base);
        return res.href;
    }catch(e) {
        return "error:Error Bad Link.";
    }
}

async function parseGFM(gh: GithubInfo, text: string): Promise<string> {
    const in_html = await fetch("https://api.github.com/markdown", {
        method: "POST",
        body: JSON.stringify({
            text: text,
            mode: "markdown",
        }),
    }).then(r => r.text());

    const html = parse5.parse(in_html);

    // TODO "/"+gh.file.split("/")[0..-1].join("/")

    const processNode = (node: parse5.Node) => {
        (() => {
            if(node.nodeName === "a") {
                const href = node.attrs.find(attr => attr.name === "href");
                if(!href) return;
                href.value = baseurl("https://github.com/"+gh.repo+"/blob/"+gh.branch+"/", href.value);
                node.attrs = node.attrs.filter(attr => attr.name !== "target" && attr.name !== "rel");
                node.attrs.push({name: "target", value: "_blank"});
                node.attrs.push({name: "rel", value: "noopener"});
            }
            if(node.nodeName === "img") {
                const src = node.attrs.find(attr => attr.name === "src");
                if(!src) return;
                src.value = baseurl("https://raw.githubusercontent.com/"+gh.repo+"/"+gh.branch+"/", src.value);
            }
        })();
        if('childNodes' in node) {
            node.childNodes.forEach(processNode);
        }
    };
    processNode(html);

    return parse5.serialize(html);
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
                    project.github,
                    await fetch(
                        "https://raw.githubusercontent.com/"
                        +project.github.repo+"/"+project.github.branch+"/"+project.github.file,
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
            <title>External</title>
            <g strokeWidth="2.1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline>
                <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path>
            </g>
        </svg>
    </div>;
}
function GithubIcon(): JSX.Element {
    return <div class="inline-block align-bottom text-white">
        <svg width="24px" height="24px" role="img" viewBox="0 0 24 24">
            <title>Github</title>
            <path d={"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 "
            +"11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724"
            +"-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-"
            +".744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1."
            +"835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5"
            +".466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1"
            +".523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 "
            +"1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1."
            +"653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5."
            +"625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3."
            +"286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.62"
            +"7-5.373-12-12-12"} fill="#fff" />
        </svg>
    </div>;
}

type ButtonStyle = "web_demo" | "github" | "information";
function Button(props: {style: ButtonStyle, href: string, children: React.ReactNode}): JSX.Element {
    return <a
        class={"inline-block p-4 px-8 rounded-md text-white <sm:min-w-max <sm:flex-1 <sm:text-center " + {
            web_demo: "bg-gradient-to-r from-green-500 to-green-600",
            github: "bg-gray-500",
            information: "bg-gradient-to-r from-blue-500 to-blue-600",
        }[props.style]}
        href={props.href}
        target="_blank"
        rel="noopener"
    >
        {props.style === "github" ? <GithubIcon /> : <ExternalIcon />}
        {" "}{props.children}
    </a>;
}

type OnGotRef<E> = (element: E, onCleanup: (cb: () => void) => void) => void;
function emulateSolidUseRef<E extends HTMLElement>(onGotRef: OnGotRef<E>) {
    const ref = useRef<E>(null);

    useEffect(() => {
        let onCleanup: (() => void)[] = [];

        if(ref.current) {
            onGotRef(ref.current, v => onCleanup.push(v));
        }

        return () => onCleanup.forEach(item => item());
    }, [ref.current]);

    return ref;
};

export default function ProjectPage(props: Props): JSX.Element {
    const headerRef = emulateSolidUseRef<HTMLElement>((header, onCleanup) => {
        console.log(header, onCleanup);
        if(window.visualViewport){
            const onupdate = () => {
                header.style.backgroundPosition =
                    visualViewport.offsetLeft + "px" + " " + visualViewport.offsetTop + "px"
                ;
                header.style.backgroundSize =
                    (960 * (1 / visualViewport.scale)) + "px"
                ;
            };
            
            visualViewport.addEventListener("resize", onupdate);
            onCleanup(() => visualViewport.removeEventListener("resize", onupdate));
            visualViewport.addEventListener("scroll", onupdate);
            onCleanup(() => visualViewport.removeEventListener("scroll", onupdate));
        }
    });

    return <>
        <Head>
            <title>{props.project.title}</title>
            <meta name="description" content={getText(props.project.body)} />
        </Head>
        <header
            ref={headerRef}
            style={{
                backgroundImage: "url("+JSON.stringify(props.project.img[2])+")",
            }}
            class="bg-fixed" // they added background attachment they could have made it a % at the same time
            // but no. the only way to do pure css parallax is to disable body scrolling, which is bad on
            // mobile because it means the url bar never auto hides
        ><div class="bg-gray-800 bg-opacity-90 text-gray-300">
            <HeaderButtons title={props.project.title} parent={{ name: "pfg's homepage", href: "/" }} />
            <CenteredContent>
                <div class="mb-3 flex flex-wrap gap-4">
                    <ShowCond when={props.project.site}>{site => (
                        <Button style={({
                            informational: "information",
                            demo: "web_demo",
                            external: "information",
                        } as const)[site.kind]} href={site.url}>
                            {{
                                informational: "Project Homepage",
                                demo: "View Demo",
                                external: "More Information",
                            }[site.kind]}
                        </Button>
                    )}</ShowCond>
                    <ShowCond when={props.project.github}>{gh => (
                        <Button style="github" href={"https://github.com/"+gh.repo}>Source Code</Button>
                    )}</ShowCond>
                </div>
            </CenteredContent>
        </div></header>
        <main class="bg-gray-300 min-h-screen">
            <CenteredContent>
                <p class="mb-3">
                    <RichtextSpans els={props.project.body} />{" "}
                </p>
                <p class="mb-3">
                    Made with{" "}
                    <For each={props.project.technologies}>{(tech, i) => <React.Fragment key={i()}>
                    <ShowBool when={i() !== 0}>{", "}</ShowBool>
                    <Technology tech={tech} />
                    </React.Fragment>}</For>
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

function Technology(props: {tech: TechnologyName}): JSX.Element {
    const techinfo = () => technologies[props.tech];
    return <a href={techinfo().link} class="text-blue-700 hover:underline" target="_blank" rel="noopener">
        {techinfo().name}
    </a>;
}
