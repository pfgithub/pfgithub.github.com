import { BasicPage } from '../src/basic_page';
import Link from 'next/link';
import { LinkOut } from '../src/link_out';

export default function Home() {
  return <BasicPage
    title="Now"
    meta_desc="what I'm doing now"
    parent={{name: "pfg's homepage", href: "/"}}
    filename="/pages/now.tsx"
  >
    <h2 class="font-black text-3xl my-3">currently</h2>
    <p class="mb-2">making stuff</p>
    <p class="mb-2"><LinkOut href="https://nownownow.com/about">what's a now page?</LinkOut></p>
  </BasicPage>;
}
