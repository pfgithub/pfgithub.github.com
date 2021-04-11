import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import useFetch from 'use-http';

// https://raw.githubusercontent.com/dwyl/english-words/master/words.txt

type FilterUser<T> = (limit: number, filter: (a: T) => boolean) => {current: T[], next: FilterUser<T>, has_remaining: boolean};

function makeFilterUser<T>(content: T[], start_index: number): FilterUser<T> {
    return (limit: number, filter: (a: T) => boolean): {current: T[], next: FilterUser<T>, has_remaining: boolean} => {
        const resv: T[] = [];
        let i = start_index
        for(; i < content.length; i++) {
            if(filter(content[i]!)) {
                resv.push(content[i]!);
                if(resv.length >= limit) break;
            }
        }
        let has_remaining = false;
        for(let j = i; j < content.length; j++) {
            if(filter(content[j]!)) {
                has_remaining = true;
                break;
            }
        }
        return {current: resv, next: makeFilterUser(content, i), has_remaining};
    };
}

function filterLimited<T>(content: T[]): FilterUser<T> {
    return makeFilterUser(content, 0);
}

function DisplayFiltered(opts: {dict: string[], filter: (a: string) => boolean}) {
    let fl = filterLimited(opts.dict)(0, () => true);
    const batch1 = fl = fl.next(100, opts.filter);
    return <div>
        <div class="italic">{
            batch1.current.length === 0
            ? "No Results"
            : batch1.current.length === 1
            ? "1 Result"
            : batch1.current.length + (batch1.has_remaining ? "+" : "") + " Results"
        }</div>
        {batch1.current.map(word => <div key={word}>{word}</div>)}
        {batch1.has_remaining && <button onClick={() => alert("TODO next")}>Next →</button>}
    </div>;
}

function DictionaryUser(opts: {dict: string[]}) {
    const [value, setValue] = useState("/^.*$/i");
    const valuesplit = value.split("/");
    const vs_copy = [...valuesplit];
    const end = valuesplit.pop();
    const expected_empty = valuesplit.shift();
    const joined = valuesplit.join("/");

    let regex: RegExp;
    let emsg: string | null;
    if(vs_copy.length < 2) {
        regex = /^error$/i;
        emsg = "Expected /regex/flags";
    }else if(expected_empty) {
        regex = /^error$/i;
        emsg = "Expected (nothing here)/regex/flags";
    }else{
        try {
            regex = new RegExp(joined, end);
            emsg = null;
        }catch(e) {
            regex = /^error$/i;
            emsg = e.toString();
        }
    }

    return <div>
        <input value={value} onInput={e => setValue(e.currentTarget.value)} />
        {emsg != null && <div class="text-red-500">Error! {emsg}</div>}
        <DisplayFiltered dict={opts.dict} filter={itm => !!regex.exec(itm)} />
    </div>;
}

function DictionaryLoader() {
    const {loading, error, data} = useFetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt', {
        
    }, []);
    if(loading) {
        return <div>Loading…</div>;
    }
    if(error) {
        return <div class="text-red-500">Error! ${error.toString()}</div>;
    }
    if(!data) return <div>Invalid state</div>;
    return <DictionaryUser dict={("" + data).split("\n").map(w => w.trim())} />;
}

export default function Home() {
  return <>
    <Head>
      <title>regex dictionary</title>
      <meta name="description" content="Search for words using regex." />
    </Head>
    <header class="bg-gray-800 from-green-700 to-blue-600">
      <div class="px-4 py-4 flex flex-col sm:flex-row">
        <Link href="/tools"><a class="flex-1 text-white hover:underline flex justify-items-start items-center">&lt; Tools</a></Link>
        <h1 class="flex-0 w-max text-2xl font-bold text-white flex justify-items-start items-center">Regex Dictionary</h1>
        <div class="flex-1 flex justify-items-start items-center"></div>
      </div>
    </header>
    <div class="bg-gray-300 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          <DictionaryLoader />
        </div>
      </div>
    </div>
    <footer class="bg-gray-600 text-white">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
          <a href="https://github.com/pfgithub/pfgithub.github.com/blob/main/pages/tools/regex_dictionary.tsx" target="_blank" rel="noreferrer noopener" class="underline">Source</a> ·{" "}
          <a href="https://github.com/pfgithub/pfgithub.github.com/edit/main/pages/regex_dictionary.tsx" target="_blank" rel="noreferrer noopener" class="underline">Edit</a>
        </div>
      </div>
    </footer>
  </>;
}
