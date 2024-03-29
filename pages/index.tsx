import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { CenteredContent } from '../src/basic_page';
import { categories, Category, Project, projects, technologies, TechnologyName } from '../src/projects';
import { RichtextSpans } from '../src/richtext';
import { For, ShowBool, ShowCond } from '../src/solid';

function Technology(attrs: {tech: TechnologyName}): JSX.Element {
  const techinfo = () => technologies[attrs.tech];
  return <a href={techinfo().link} class="hover:underline" target="_blank" rel="noopener">
    {techinfo().name}
  </a>;
}

function Card(attrs: {id: string, project: Project}): JSX.Element {
  const router = useRouter();
  const targetUrl = () => {
    if(!attrs.project.github && attrs.project.site) {
      return attrs.project.site.url;
    }
    return "/projects/"+attrs.id;
  };
  const aTarget = () => {
    return targetUrl().startsWith("/") ? "" : "_blank";
  };

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
    const target = targetUrl();
    if(e.ctrlKey || e.metaKey || e.altKey) {
      window.open(target);
    }else{
      if(target.startsWith("/")) {
        router.push(target);
      }else{
        window.open(target);
      }
    }
  }}>
    <div class="sm:w-40 sm:h-auto flex-none overflow-hidden" aria-hidden="true">
      <Link rel="noopener" target={aTarget()} tabIndex={-1} href={targetUrl()}>
        <img
          src={attrs.project.img[2]}
          width={attrs.project.img[0]}
          height={attrs.project.img[1]}
          alt=""
          class={[
            "w-full h-full object-cover",
            ((attrs.project.img[3] ?? {}).pixel ?? false) ? "rendering-crisp-edges" : "",
          ].join(" ")}
        />
      </Link>
    </div>
    <div class="p-4 flex flex-col z-10 relative">
      <h3><Link rel="noopener" target={aTarget()} class="font-black hover:underline" href={targetUrl()}>
        {attrs.project.title}
      </Link></h3>
      <div class="mb-2 mt-1">
        <RichtextSpans els={attrs.project.body} />
      </div>
      <div class="font-light text-sm">
        <For each={attrs.project.technologies}>{(tech, i) => <React.Fragment key={i()}>
          <ShowBool when={i() !== 0}>{" • "}</ShowBool>
          <Technology tech={tech} />
        </React.Fragment>}</For>
      </div>
    </div>
  </div>;
}

function Categories(props: {categories: Category[]}) {
  return <For each={props.categories}>{(category, i) => <React.Fragment key={i()}>
    <h2 class="font-black text-3xl my-3">{category.title}</h2>
    <ShowCond when={category.description}>{desc => (
      <p class="mb-3">
        <RichtextSpans els={desc} />
      </p>
    )}</ShowCond>
    <For each={category.projects}>{project_name => {
      const project = projects[project_name];
      return <Card
        key={project_name}
        id={project_name}
        project={project}
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
    <header class="bg-gradient-to-br from-green-700 to-blue-600 bg-fixed">
      <div class="px-4 py-16 sm:py-32 flex flex-row justify-center">
        <h1 class="w-max text-5xl font-black text-white">pfg's homepage</h1>
      </div>
    </header>
    <main class="bg-gray-300 min-h-screen">
      <CenteredContent>
        <Categories categories={categories} />
        <div class="mb-4"></div>
      </CenteredContent>
    </main>
    <footer class="bg-gray-600 text-white">
      <CenteredContent>
        This page was made with <span class="underline"><Technology tech="nextjs" /></span>,{" "}
        <span class="underline"><Technology tech="typescript" /></span>,{" "}
        and <span class="underline"><Technology tech="windi" /></span>.{" "}
        <div class="mb-2"></div>
        <a href="https://github.com/pfgithub/pfgithub.github.com" target="_blank" rel="noopener" class="underline">Source</a> ·{" "}
        <a href="https://github.com/pfgithub/pfgithub.github.com/edit/main/pages/index.tsx" target="_blank" rel="noopener" class="underline">Edit</a>
      </CenteredContent>
    </footer>
  </>;
}
