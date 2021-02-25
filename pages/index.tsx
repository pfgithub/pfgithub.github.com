import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

function technology(name: string, link: string): Technology {
  return {name, link};
}

const technologies = {
  typescript: technology("Typescript", "https://www.typescriptlang.org/"),
  javascript: technology("Javascript", "https://developer.mozilla.org/en/JavaScript"),
  tailwind: technology("Tailwind CSS", "https://tailwindcss.com/"),
  node: technology("NodeJS", "https://nodejs.org/en/"),
  discord_js: technology("discord.js", "https://discord.js.org/"),
  react: technology("React", "https://reactjs.org/"),
  vanilla_js: technology("Vanilla JS", "http://vanilla-js.com/"),
  codemirror: technology("CodeMirror", "https://codemirror.net/"),
  lua: technology("Lua", "https://www.lua.org/"),
  scss: technology("Sass CSS", "https://sass-lang.com/"),
  μhtml: technology("μhtml", "https://github.com/WebReflection/uhtml"),
  electron: technology("Electron", "https://www.electronjs.org/"),
  zig: technology("Zig", "https://ziglang.org/"),
  webpack: technology("Webpack", "https://webpack.js.org/"),
  parcel: technology("Parcel", "https://parceljs.org/"),
  c: technology("C", "https://en.wikipedia.org/wiki/C_(programming_language)"),
  xlib: technology("Xlib", "https://en.wikipedia.org/wiki/Xlib"),
  sdl: technology("SDL", "https://www.libsdl.org/"),
  tree_sitter: technology("Tree-Sitter", "https://tree-sitter.github.io/tree-sitter/"),
  express: technology("Express", "https://expressjs.com/"),
  ejs: technology("EJS", "https://ejs.co/"),
  nextjs: technology("NextJS", "https://nextjs.org/"),
} as const;

type TechnologyName = keyof typeof technologies;
type Technology = {
  name: string,
  link: string,
};

function arraymix<T, U>(in_arr: T[], mix: () => U): (T | U)[] {
  return in_arr.flatMap((k, i) => i === 0 ? [k] : [mix(), k]);
}

function Technology(attrs: {tech: TechnologyName}): JSX.Element {
  const techinfo = technologies[attrs.tech];
  return <a key={attrs.tech} href={techinfo.link} class="hover:underline" target="_blank" rel="noreferrer noopener">
    {techinfo.name}
  </a>;
}

function Card(attrs: {title: string, body: JSX.Element, url: string, img: string, img_size: [w: number, h: number], img_pixel?: boolean, technologies: TechnologyName[]}): JSX.Element {
  return <a class="flex flex-col sm:flex-row hover:shadow-md bg-gray-100 hover:bg-white" href={attrs.url} target="_blank" rel="noreferrer noopener">
    <div class="sm:w-40 sm:h-auto flex-none overflow-hidden">
      <img
        src={attrs.img}
        width={attrs.img_size[0]}
        height={attrs.img_size[0]}
        alt=""
        class={["w-full h-full object-cover", attrs.img_pixel ? "rendering-crisp-edges" : ""].join(" ")}
      />
    </div>
    <div class="p-4 flex flex-col">
      <div class="font-black hover:underline">{attrs.title}</div>
      <div class="mb-2 mt-1">{attrs.body}</div>
      <div class="font-light text-sm">{arraymix(attrs.technologies.map(tech => <Technology tech={tech} />), () => " • ")}</div>
    </div>
  </a>;
}

function LinkOut(attrs: {href: string, children: React.ReactNode}): JSX.Element {
  return (
    <a href={attrs.href} class="hover:underline text-blue-900" target="_blank" rel="noreferrer noopener">
      {attrs.children}
    </a>
  );
}

export default function Home() {
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
          <h2 class="font-black text-3xl my-3">Current Projects</h2>
          <p class="mb-3">Large projects I'm working on right now</p>
          <div class="flex flex-col gap-3">
            <Card
              title="inter·punct bot"
              url={"https://interpunct.info"}
              body={<>
                A bot for the chat service{" "}
                <LinkOut href="https://discord.com">Discord</LinkOut> that adds many{" "}
                features including games such as Checkers and Paper Soccer and moderator{" "}
                functions such as a ticketing system and a way for mods to give people{" "}
                roles faster using emojis.
              </>}
              img={"/icons/interpunct_img.png"}
              img_size={[960, 600]}
              technologies={["typescript", "node", "discord_js"]}
            />
            <Card
              title="ThreadReader"
              url={"https://thread.pfg.pw"}
              body={<>
                A web app I'm making for{" "}
                <LinkOut href="https://reddit.com">Reddit</LinkOut> and{" "}
                <LinkOut href="https://joinmastodon.org">Mastodon</LinkOut> combining{" "}
                the best features of both old.reddit and new.reddit and providing a tree{" "}
                view for Mastodon.
              </>}
              img={"/icons/threadreader.png"}
              img_size={[648, 408]}
              technologies={["typescript", "tailwind", "webpack", "vanilla_js"]}
            />
          </div>
          <h2 class="font-black text-3xl mb-3 mt-10">Past Projects</h2>
          <p class="mb-3">Large projects I no longer use or maintain</p>
          <div class="flex flex-col gap-3">
            <Card
              title="ScPL"
              url="https://scpl.dev"
              body={<>
                A programming language that compiles to the iOS Visual Scripting tool,{" "}
                <LinkOut href="https://support.apple.com/guide/shortcuts/welcome/ios">
                  Shortcuts
                </LinkOut>. Had a web editor and compiler, command line compiler, and{" "}
                vscode extension with diagnostics and autocomplete. ScPL is no longer{" "}
                maintained and is missing new actions that were added in recent iOS updates.
              </>}
              img={"/icons/scpl.png"}
              img_size={[519, 328]}
              technologies={["typescript", "react", "codemirror"]}
            />
          </div>
          <h2 class="font-black text-3xl mb-3 mt-10">One-offs</h2>
          <p class="mb-3">
            Other things I worked on at some point in the past and may or may not still use{" "}
            or maintain.
          </p>
          <div class="flex flex-col gap-3">
            <Card
              title="Clicker"
              url="https://clicker.pfg.pw"
              body={<>
                An exponential growth idle game, originally programmed in Javascript on the{" "}
                iOS notes app with no indentation and no way to test that the code worked.
              </>}
              img={"/icons/clicker.png"}
              img_size={[924, 437]}
              technologies={["typescript", "webpack", "vanilla_js", "scss"]}
            />
            <Card
              title="electron-music-player"
              url="https://github.com/pfgithub/electron-music-player/"
              body={<>
                A music player written in electron that allows storing lyrics with songs and{" "}
                searching by lyrics.
              </>}
              img={"/icons/musicplayer.png"}
              img_size={[658, 377]}
              technologies={["typescript", "electron", "scss", "vanilla_js", "μhtml", "parcel"]}
            />
            <Card
              title="Mapexplorer"
              url="https://pfg.pw/mapexplorer"
              img_pixel={true}
              body={<>
                An interactive map for the game{" "}
                <LinkOut href="https://thetravelers.online">thetravelers.online</LinkOut>.{" "}
                Controls: Move and pan with the mouse or touch, Zoom with scroll or pinch,{" "}
                Select tile with click or tap. Hotkeys: M [toggle m], K [render huge], G{" "}
                [go to coords].
              </>}
              img={"/icons/mapexplorer.png"}
              img_size={[867, 490]}
              technologies={["javascript"]}
            />
            <Card
              title="progsim"
              url="https://pfg.pw/progsim/progsim"
              body={<>
                An assembly-like programming language intended for beginners to programming.
              </>}
              img={"/icons/progsim.png"}
              img_size={[485, 315]}
              technologies={["javascript"]}
            />
            <Card
              title="Earlygame Run"
              url="https://mods.factorio.com/mod/earlygame-run"
              body={<>
                A mod for the game{" "}
                <LinkOut href="https://factorio.com">Factorio</LinkOut> that adds the{" "}
                ability to run from the moment you start the game.
              </>}
              img={"/icons/earlygame_run.png"}
              img_size={[460, 256]}
              technologies={["lua"]}
            />
            <Card
              title="masc"
              url="https://github.com/pfgithub/masc"
              body={<>
                A programming language that compiles to human-readable mips assembly.
              </>}
              img={"/icons/masc.png"}
              img_size={[324, 174]}
              technologies={["typescript"]}
            />
            <Card
              title="Leaderboard History"
              url="https://pfg.pw/travelersleaderboard/player"
              body={<>
                An interactive viewer for the leaderboard history for the game{" "}
                <LinkOut href="https://thetravelers.online">thetravelers.online</LinkOut>.
              </>}
              img={"/icons/travelersleaderboard.png"}
              img_size={[577, 352]}
              technologies={["javascript"]}
            />
            <Card
              title="Zcho"
              url="https://github.com/pfgithub/zcho"
              body={<>
                A collection of command-line programs including jsonexplorer, an{" "}
                interactive explorer for json data, z menu, an interactive menu{" "}
                for shell scripts, and some other helper tools for shell scripts.
              </>}
              img={"/icons/jsonexplorer.png"}
              img_size={[425, 211]}
              technologies={["zig"]}
            />
            <Card
              title="Travelers API"
              url="https://www.npmjs.com/package/travelersapi"
              body={<>
                A node API for creating bots for{" "}
                <LinkOut href="https://thetravelers.online">thetravelers.online</LinkOut>.
              </>}
              img={"/icons/travelersapi.png"}
              img_size={[760, 405]}
              technologies={["typescript", "node"]}
            />
            <Card
              title="Mousebuttons"
              url="https://github.com/pfgithub/mousebuttons"
              body={<>
                A command-line program that makes it possible to use a system-wide push{" "}
                to talk key in Zoom and other apps. Another program that allows configuring{" "}
                mice with many buttons to have custom chording sequences, such as holding{" "}
                down a side button and scrolling to change volume.
              </>}
              img={"/icons/mousebuttons.png"}
              img_size={[91, 67]}
              technologies={["zig", "xlib"]}
            />
            <Card
              title="Filetransfer"
              url="https://github.com/pfgithub/filetransfer"
              body={<>
                A program for transferring files quickly within your local network.
              </>}
              img={"/icons/filetransfer.png"}
              img_size={[566, 283]}
              technologies={["javascript", "express", "ejs"]}
            />
            <Card
              title="Pixelcode"
              url="https://github.com/pfgithub/pixelcode"
              body={<>
                A neat-looking demo of a pixel art code editor. Only a demo, not usable{" "}
                or maintained.
              </>}
              img={"/icons/pixelcode.png"}
              img_size={[347, 107]}
              img_pixel={true}
              technologies={["zig", "sdl", "tree_sitter"]}
            />
            <Card
              title="Windowsystem"
              url="https://windowsystem.pfg.pw/"
              body={<>
                A demo of a window system that supports resizing on touchscreen interfaces.
              </>}
              img={"/icons/windowsystem.png"}
              img_size={[559, 312]}
              technologies={["typescript", "webpack", "scss"]}
            />
            <Card
              title="Sitepages"
              url="https://pfg.pw/sitepages"
              body={<>
                A collection of random unrelated web tools to perform various functions.
              </>}
              img={"/icons/sitepages.png"}
              img_size={[341, 165]}
              technologies={["javascript", "vanilla_js", "μhtml"]}
            />
          </div>
          <h2 class="font-black text-3xl mb-3 mt-10">Links</h2>
          <div class="flex flex-col gap-3">
            <Card
              title="Github"
              url="https://github.com/pfgithub"
              body={<>
                My github page.
              </>}
              img={"/icons/github.png"}
              img_size={[744, 441]}
              technologies={[]}
            />
          </div>
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
