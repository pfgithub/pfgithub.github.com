import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return <>
    <Head>
      <title>regex dictionary</title>
      <meta name="description" content="Search for words using regex." />
    </Head>
    <header class="bg-gray-800 from-green-700 to-blue-600">
      <div class="px-4 py-4 flex flex-col sm:flex-row">
        <Link href="/"><a class="flex-1 text-white hover:underline flex justify-items-start items-center">&lt; pfg's homepage</a></Link>
        <h1 class="flex-0 w-max text-2xl font-bold text-white flex justify-items-start items-center">Tools</h1>
        <div class="flex-1 flex justify-items-start items-center"></div>
      </div>
    </header>
    <div class="bg-gray-300 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-4">
            <Link href="/tools/regex_dictionary"><a class="text-blue-600 hover:underline">Regex Dictionary</a></Link>
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
