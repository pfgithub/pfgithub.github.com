import Head from 'next/head'
import Link from 'next/link';

export function CenteredContent(props: {children: React.ReactNode}): JSX.Element {
  // maybe don't p-4 by default?
  return <div class="max-w-screen-lg mx-auto">
    <div class="p-4">
      {props.children}
    </div>
  </div>;
}

export function Footer(): JSX.Element {
  return <footer class="bg-gray-600 text-white">
    <CenteredContent>
      <a href={"https://github.com/pfgithub/pfgithub.github.com/"} target="_blank" rel="noreferrer noopener" class="underline">Source</a> ·{" "}
      <a href={"https://github.com/pfgithub/pfgithub.github.com/"} target="_blank" rel="noreferrer noopener" class="underline">Edit</a>
    </CenteredContent>
  </footer>;
}

export function HeaderButtons(props: {
  parent: {href: string, name: string},
  title: string,
}): JSX.Element {
  return  <div class="p-4 flex flex-col sm:flex-row">
    <Link href={props.parent.href}><a class="flex-1 text-white hover:underline flex justify-items-start items-center">&lt; {props.parent.name}</a></Link>
    <h1 class="flex-0 w-max text-2xl font-bold text-white flex justify-items-start items-center">{props.title}</h1>
    <div class="flex-1 flex justify-items-start items-center"></div>
  </div>;
}

export function BasicPage(props: {
  title: string, 
  meta_desc: string,
  parent: {href: string, name: string},
  children: React.ReactNode,
  filename: string,
}) {
  return <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.meta_desc} />
    </Head>
    <header class="bg-gray-800">
      <HeaderButtons parent={props.parent} title={props.title} />
    </header>
    <main class="bg-gray-300 min-h-screen">
      <CenteredContent>
        {props.children}
      </CenteredContent>
    </main>
    <Footer />
  </>;
}
