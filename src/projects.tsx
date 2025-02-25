import { LinkOut } from "./link_out";

function technology(name: string, link: string): Technology {
    return {name, link};
}
export const technologies = {
    typescript: technology("Typescript", "https://www.typescriptlang.org/"),
    javascript: technology("Javascript", "https://developer.mozilla.org/en/JavaScript"),
    tailwind: technology("Tailwind CSS", "https://tailwindcss.com/"),
    windi: technology("Windi CSS", "https://windicss.org/"),
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
    assembly: technology("Assembly", "https://en.wikipedia.org/wiki/Assembly_language"),
    solid: technology("SolidJS", "https://solidjs.com/"),
    canvas: technology("Canvas", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"),
    wasm: technology("WebAssembly", "https://webassembly.org/"),
    vite: technology("Vite", "https://vitejs.dev/"),
    firebase: technology("Firebase", "https://firebase.google.com/"),
} as const;

export type GithubInfo = {
    repo: string,
    branch: string,
    file: string,
};

export type Project = {
    img: [w: number, h: number, url: string, opts?: {pixel: boolean}],
    title: string,
    body: Richtext,
    technologies: TechnologyName[],

    github: null | GithubInfo,
    site: null | {
        kind: "informational" | "demo" | "external",
        url: string,
    },
    // web_demo: url | null,
    // readme: url | null,
};

export type TechnologyName = keyof typeof technologies;
export type Technology = {
  name: string,
  link: string,
};

export type RichtextSpan = string | {
    url: string,
    c: RichtextSpan[],
};

type Richtext = RichtextSpan[];

export type Category = {
    title: string,
    description: Richtext | null,
    projects: ProjectID[],
};

export type ProjectID = keyof typeof projects;

function projectsList<T extends string>(v: {[key in T]: Project}): {[key in T]: Project} {
    return v;
}

export const projects = projectsList({
    interpunct_bot: {
        img: [960, 600, "/icons/interpunct_img.png"],
        title: "inter·punct bot",
        body: [
            "A bot for the chat service ",
            {url: "https://discord.com", c: ["Discord"]},
            " that adds many features including games such as Checkers and ",
            "Paper Soccer and moderator functions such as a ticketing system",
            " and a way for mods to give people roles faster using emojis.",
        ],
        technologies: ["typescript", "node", "discord_js"],

        github: {
            repo: "pfgithub/interpunctbot",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "informational",
            url: "https://interpunct.info",
        },
    },
    threadreader: {
        img: [648, 408, "/icons/threadreader.png"],
        title: "ThreadClient",
        body: [
            "A web app I'm making for ",
            {url: "https://reddit.com", c: ["Reddit"]}, " and ",
            {url: "https://joinmastodon.org", c: ["Mastodon"]}, " combining ",
            "the best features of both old.reddit and new.reddit and providing a tree ",
            "view for Mastodon."
        ],
        technologies: ["solid", "typescript", "windi", "vite", "vanilla_js", "wasm"],

        github: {
            repo: "pfgithub/threadclient",
            branch: "main",
            file: "README.md",
        },
        site: {
            kind: "informational",
            url: "https://thread.pfg.pw",
        },
    },

    scpl: {
        img: [519, 328, "/icons/scpl.png"],
        title: "ScPL",
        body: [
            "A programming language that compiles to the iOS Visual Scripting tool, ",
            {url: "https://support.apple.com/guide/shortcuts/welcome/ios", c: ["Shortcuts"]},
            ". Had a web editor and compiler, command line compiler, and ",
            "vscode extension with diagnostics and autocomplete. ScPL is no longer ",
            "maintained and is missing new actions that were added in recent iOS updates.",
        ],
        technologies: ["typescript", "react", "codemirror"],

        github: {
            repo: "pfgithub/scpl",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "informational",
            url: "https://scpl.dev",
        },
    },
    clicker: {
        img: [924, 437, "/icons/clicker.png"],
        title: "Clicker",
        body: [
            "An exponential growth idle game.",
        ],
        technologies: ["typescript", "webpack", "vanilla_js", "scss"],

        github: {
            repo: "pfgithub/clicker",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://clicker.pfg.pw",
        },
    },
    plctfarmer: {
        img: [160, 160, "/icons/plctfarmer.png", {pixel: true}],
        title: "Pl¢tfarmer",
        body: [
            "An experimental idle platformer made for a WASM-4 fantasy console game jam.",
        ],
        technologies: ["zig", "wasm"],

        github: {
            repo: "pfgithub/w4test",
            branch: "main",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://pfg.itch.io/plctfarmer",
        },
    },
    mystwyrld: {
        img: [296, 289, "/icons/mystwyrld.png"],
        title: "MystWyrld",
        body: [
            "Minecraft puzzle map"
        ],
        technologies: [],

        github: null,
        site: {
            kind: "external",
            url: "https://lfs.pfg.pw/site/mystwyrld/",
        },
    },
    mapexplorer: {
        img: [867, 490, "/icons/mapexplorer.png", {pixel: true}],
        title: "Mapexplorer",
        body: [
            "An interactive map for the game ",
            {url: "https://thetravelers.online", c: ["thetravelers.online"]},
            " made with javascript canvas.",
        ],
        technologies: ["javascript", "canvas"],

        github: {
            repo: "pfgithub/mapexplorer",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://pfg.pw/mapexplorer",
        },
    },
    musicplayer: {
        img: [658, 377, "/icons/musicplayer.png"],
        title: "electron-music-player",
        body: [
            "A music player written in electron that allows storing lyrics with songs and ",
            "searching by lyrics.",
        ],
        technologies: ["typescript", "electron", "scss", "vanilla_js", "μhtml", "parcel"],

        github: {
            repo: "pfgithub/electron-music-player",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    progsim: {
        img: [485, 315, "/icons/progsim.png"],
        title: "progsim",
        body: [
            "An assembly-like programming language intended for beginners to programming.",
        ],
        technologies: ["javascript"],

        github: {
            repo: "pfgithub/progsim",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://pfg.pw/progsim/progsim",
        },
    },
    'earlygame-run': {
        img: [460, 256, "/icons/earlygame_run.png"],
        title: "Earlygame Run",
        body: [
            "A mod for the game ",
            {url: "https://factorio.com", c: ["Factorio"]}, " that adds the ",
            "ability to run from the moment you start the game.",
        ],
        technologies: ["lua"],

        github: {
            repo: "pfgithub/earlygame-run",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "external",
            url: "https://mods.factorio.com/mod/earlygame-run",
        },
    },
    masc: {
        img: [324, 174, "/icons/masc.png"],
        title: "masc",
        body: [
            "A programming language that compiles to human-readable mips assembly.",
        ],
        technologies: ["typescript", "assembly"],

        github: {
            repo: "pfgithub/masc",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://pfg.pw/masc",
        },
    },
    cpu: {
        img: [420, 219, "/icons/cpu.png"],
        title: "CPU",
        body: [
            "A simple 64-bit CPU made out of nor gates and an assembly language to program for it.",
        ],
        technologies: ["typescript", "zig", "assembly"],

        github: {
            repo: "pfgithub/cpu",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    travelersleaderboard: {
        img: [577, 352, "/icons/travelersleaderboard.png"],
        title: "Leaderboard History",
        body: [
            "An interactive viewer for the leaderboard history for the game ",
            {url: "https://thetravelers.online", c: ["thetravelers.online"]}, ".",
        ],
        technologies: ["javascript", "node"],

        github: {
            repo: "pfgithub/travelersleaderboard",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://pfg.pw/travelersleaderboard/player",
        },
    },
    zcho: {
        img: [425, 211, "/icons/jsonexplorer.png"],
        title: "Zcho",
        body: [
            "A collection of command-line programs including jsonexplorer, an ",
            "interactive explorer for json data, z menu, an interactive menu ",
            "for shell scripts, and some other helper tools for shell scripts.",
        ],
        technologies: ["zig"],

        github: {
            repo: "pfgithub/zcho",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    travelersapi: {
        img: [760, 405, "/icons/travelersapi.png"],
        title: "Travelers API",
        body: [
            "An ", {url: "https://www.npmjs.com/", c: ["npm"]}, " package for creating ",
            "bots for the game ", {url: "https://thetravelers.online", c: ["thetravelers.online"]}, ".",
        ],
        technologies: ["typescript", "node"],

        github: {
            repo: "pfgithub/travelersapi",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "external",
            url: "https://www.npmjs.com/package/travelersapi",
        }
    },
    mousebuttons: {
        img: [91, 67, "/icons/mousebuttons.png"],
        title: "Mousebuttons",
        body: [
            "A command-line program that makes it possible to use a system-wide push ",
            "to talk key in Zoom and other apps. Another program that allows configuring ",
            "mice with many buttons to have custom chording sequences, such as holding ",
            "down a side button and scrolling to change volume.",
        ],
        technologies: ["zig", "xlib"],

        github: {
            repo: "pfgithub/mousebuttons",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    filetransfer: {
        img: [566, 283, "/icons/filetransfer.png"],
        title: "Filetransfer",
        body: [
            "A program for transferring files quickly within your local network.",
        ],
        technologies: ["javascript", "express", "ejs"],

        github: {
            repo: "pfgithub/filetransfer",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    pixelcode: {
        img: [347, 107, "/icons/pixelcode.png"],
        title: "Pixelcode",
        body: [
            "A neat-looking demo of a pixel art code editor. Only a demo, not usable ",
            "or maintained.",
        ],
        technologies: ["zig", "sdl", "tree_sitter"],

        github: {
            repo: "pfgithub/pixelcode",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    zigmd: {
        img: [636, 390, "/icons/zigmd.png"],
        title: "ZigMD",
        body: [
            "A testing ground for immediate mode GUI and text editors and various other things.",
        ],
        technologies: ["zig", "sdl"],

        github: {
            repo: "pfgithub/zigmd",
            branch: "master",
            file: "README.md",
        },
        site: null,
    },
    windowsystem: {
        img: [559, 312, "/icons/windowsystem.png"],
        title: "Windowsystem",
        body: [
            "A demo of a window system that supports resizing on touchscreen interfaces.",
        ],
        technologies: ["typescript", "webpack", "scss"],

        github: {
            repo: "pfgithub/windowsystem",
            branch: "master",
            file: "README.md",
        },
        site: {
            kind: "demo",
            url: "https://windowsystem.pfg.pw/",
        },
    },
    sitepages: {
        img: [341, 165, "/icons/sitepages.png"],
        title: "Sitepages",
        body: [
            "A collection of random unrelated web tools to perform various functions.",
        ],
        technologies: ["javascript", "vanilla_js", "μhtml"],

        github: null,
        site: {
            kind: "informational",
            url: "https://pfg.pw/sitepages",
        },
    },
    tools: {
        img: [308, 202, "/icons/tools.png"],
        title: "Tools",
        body: [
            "Some helpful tools, like sitepages but with more effort put into each.",
        ],
        technologies: ["nextjs", "typescript", "windi"],

        github: null,
        site: {
            kind: "informational",
            url: "/tools",
        },
    },
    animator: {
        img: [835, 496, "/icons/animator.png"],
        title: "Animator",
        body: [
            "A simple collaborative animation program for animating over audio",
        ],
        technologies: ["firebase", "solid", "windi", "vite", "typescript"],

        github: {
            repo: "pfgithub/threadclient",
            branch: "main",
            file: "packages/animator-ui-web/README.md"
        },
        site: {
            kind: "demo",
            url: "https://animator.pfg.pw/",
        },
    },

    github: {
        img: [744, 441, "/icons/github.png"],
        title: "Github",
        body: [
            "My github profile."
        ],
        technologies: [],

        github: null,
        site: {
            kind: "external",
            url: "https://github.com/pfgithub",
        },
    },
});

export const categories: Category[] = [
    {
        title: "Current Projects",
        description: ["Large projects I'm working on right now"],
        projects: [
            "interpunct_bot",
            "threadreader",
        ],
    },
    {
        title: "Past Projects",
        description: ["Large projects I no longer use or maintain"],
        projects: [
            "scpl",
        ],
    },
    {
        title: "One-offs",
        description: [
            "Smaller projects I worked on at some point in the past and may or may not still use ",
            "or maintain.",
        ],
        projects: [
            "clicker",
            "plctfarmer",
            "mystwyrld",
            "animator",
            "mapexplorer",
            "masc",
            "tools",
            "progsim",
            "sitepages",
            "windowsystem",
            "earlygame-run",
            "travelersleaderboard",
            "cpu",
            "zcho",
            "musicplayer",
            "travelersapi",
            "mousebuttons",
            "filetransfer",
            "pixelcode",
            "zigmd",
        ],
    },
    {
        title: "Links",
        description: null,
        projects: [
            "github",
        ],
    },
];
