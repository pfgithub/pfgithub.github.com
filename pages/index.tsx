import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import { categories, Category, Project, projects, technologies, TechnologyName } from '../public/projects';

// delete these after migration and remove all the key= stuff
function For<T>(props: {each: T[], children: (v: T, i: () => number) => JSX.Element}): JSX.Element {
  // if I wanted to do a real <For> I could do auto-keying by putting array items
  // into a map saved with useRef, but it's not worth it because I'll be switching
  // to solid once solid-starter has ssr support.
  return <>{props.each.map((v, i) => props.children(v, () => i))}</>;
}
function ShowBool(props: {when: boolean, children: React.ReactNode}): JSX.Element {
  return <React.Fragment>{props.when ? props.children : null}</React.Fragment>;
}
function ShowCond<T>(props: {when: T | undefined | null, children: (v: T) => React.ReactNode}): JSX.Element {
  return <React.Fragment>{props.when != null ? props.children(props.when) : null}</React.Fragment>;
}

function Technology(attrs: {tech: TechnologyName}): JSX.Element {
  const techinfo = () => technologies[attrs.tech];
  return <a href={techinfo().link} class="hover:underline" target="_blank" rel="noreferrer noopener">
    {techinfo().name}
  </a>;
}

function Card(attrs: Project): JSX.Element {
  // TODO spa navigation if url.startsWith("/")
  return <div class="my-2 flex flex-col sm:flex-row hover:shadow-md bg-gray-100 hover:bg-white" onClick={e => {
    // don't click if any text is selected
    const selection = document.getSelection();
    if(selection?.isCollapsed === false) return;
    console.log("target:", e.target);
    // don't accept click if any of the click target parent nodes look like they might be clickable
    let target_parent = e.target as Node | null;
    while(target_parent && target_parent !== e.currentTarget) {
        if(target_parent instanceof HTMLElement && (false
            || target_parent.nodeName === "A"
            || target_parent.nodeName === "BUTTON"
            || target_parent.nodeName === "VIDEO"
            || target_parent.nodeName === "AUDIO"
            || target_parent.nodeName === "INPUT"
            || target_parent.nodeName === "TEXTAREA"
            || target_parent.nodeName === "IFRAME"
            || target_parent.classList.contains("resizable-iframe")
            || target_parent.classList.contains("handles-clicks")
        )) return;
        target_parent = target_parent.parentNode;
    }
    e.stopPropagation();
    window.open(attrs.url);
  }}>
    <div class="sm:w-40 sm:h-auto flex-none overflow-hidden" aria-hidden="true">
      <a href={attrs.url} target="_blank" rel="noreferrer noopener">
        <img
          src={attrs.img[2]}
          width={attrs.img[0]}
          height={attrs.img[1]}
          alt=""
          class={[
            "w-full h-full object-cover",
            ((attrs.img[3] ?? {}).pixel ?? false) ? "rendering-crisp-edges" : "",
          ].join(" ")}
        />
      </a>
    </div>
    <div class="p-4 flex flex-col z-10 relative">
      <a class="font-black hover:underline" href={attrs.url} target="_blank" rel="noreferrer noopener">{attrs.title}</a>
      <div class="mb-2 mt-1">{attrs.body()}</div>
      <div class="font-light text-sm">
        <For each={attrs.technologies}>{(tech, i) => <React.Fragment key={i()}>
          <ShowBool when={i() !== 0}>{" • "}</ShowBool>
          <Technology tech={tech} />
        </React.Fragment>}</For>
      </div>
    </div>
  </div>;
}

function NavbarLink(props: {children: React.ReactNode, href: string}) {
  return <Link href={props.href}><a class="text-blue-700 hover:underline">{props.children}</a></Link>;
}
function Navbar() {
  return <div>
    <NavbarLink href="/about">about</NavbarLink>{" · "}
    <NavbarLink href="/tools">tools</NavbarLink>{" · "}
    <NavbarLink href="/now">now</NavbarLink>{" · "}
    <NavbarLink href="/blog">blog</NavbarLink>
  </div>;
}

function Categories(props: {categories: Category[]}) {
  return <For each={props.categories}>{(category, i) => <React.Fragment key={i()}>
    <h2 class="font-black text-3xl my-3">{category.title}</h2>
    <ShowCond when={category.description}>{desc => (
      <p class="mb-3">{desc()}</p>
    )}</ShowCond>
    <For each={category.projects}>{project_name => {
      const project = projects[project_name];
      return <Card
        key={project_name}
        {...project}
      />;
    }}</For>
  </React.Fragment>}</For>;
}

export default function Home() {
  // in solid js, switch <Head> to solid-meta <Title>/<Meta>
  return <>
    <Head>
      <title>pfg's homepage</title>
      <meta name="description" content="pfg's homepage website that is a homepage." />
    </Head>
    <header class="bg-gradient-to-br from-green-700 to-blue-600">
      <div class="px-4 py-16 sm:py-32 flex flex-row justify-center">
        <h1 class="w-max text-5xl font-black text-white">pfg's homepage</h1>
      </div>
    </header>
    <div class="bg-gray-300 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          <div class="w-full"></div>
          <Navbar />
          <Categories categories={categories} />
          <div class="mb-4"></div>
        </div>
      </div>
    </div>
    <footer class="bg-gray-600 text-white">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          This page was made with <span class="underline"><Technology tech="nextjs" /></span>,{" "}
          <span class="underline"><Technology tech="typescript" /></span>,{" "}
          and <span class="underline"><Technology tech="tailwind" /></span>.{" "}
          <div class="mb-2"></div>
          <a href="https://github.com/pfgithub/pfgithub.github.com" target="_blank" rel="noreferrer noopener" class="underline">Source</a> ·{" "}
          <a href="https://github.com/pfgithub/pfgithub.github.com/edit/main/pages/index.tsx" target="_blank" rel="noreferrer noopener" class="underline">Edit</a>
        </div>
      </div>
    </footer>
  </>;
}
