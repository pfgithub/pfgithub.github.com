import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BasicPage } from '../../src/basic_page';

export default function Home() {
  return <BasicPage
    title="Tools"
    meta_desc="some tools"
    parent={{name: "pfg's homepage", href: "/"}}
    filename="/pages/tools/index.tsx"
  >
    <Link className="text-blue-600 hover:underline" href="/tools/regex_dictionary">Regex Dictionary</Link>
  </BasicPage>;
}
