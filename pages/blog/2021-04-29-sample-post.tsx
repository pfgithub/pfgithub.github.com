import { BasicPage } from '../../src/basic_page';
import Link from 'next/link';
import { LinkOut } from '../../src/link_out';

export default function Home() {
  return <BasicPage
    title="Sample Post"
    meta_desc="a sample post"
    parent={{name: "Blog", href: "/blog"}}
    filename="/pages/blog/2021-04-29-sample-post.tsx"
  >
    <p class="mb-2">Example</p>
  </BasicPage>;
}
