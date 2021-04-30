import { BasicPage } from '../src/basic_page';
import Link from 'next/link';
import { LinkOut } from '../src/link_out';

export default function Home() {
  return <BasicPage
    title="Blog"
    meta_desc="a bloh"
    parent={{name: "pfg's homepage", href: "/"}}
    filename="/pages/blog.tsx"
  >
    <h2 class="font-black text-3xl my-3">Posts</h2>
    <p class="mb-2">*<i>There are no posts.</i>*</p>
  </BasicPage>;
}
