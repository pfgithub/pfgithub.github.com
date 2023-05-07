import { BasicPage } from '../src/basic_page';
import Link from 'next/link';
import { LinkOut } from '../src/link_out';
import { useState } from 'react';

export default function Home() {
  const [postsVisible, setPostsVisible] = useState(false);
  return <BasicPage
    title="Blog"
    meta_desc="a blog"
    parent={{name: "pfg's homepage", href: "/"}}
    filename="/pages/blog.tsx"
  >
    <h2 class="font-black text-3xl my-3">Posts</h2>
    {
      postsVisible ? <>
        <p>2021-04-29: <Link className="text-blue-700 hover:underline" href="/blog/2021-04-29-sample-post">
          sample post
        </Link></p>
      </> : <p class="mb-2">*<i>
        There are no <button class="italic text-blue-900 hover:underline" onClick={() => setPostsVisible(true)}>posts</button>.
      </i>*</p>
    }
    
  </BasicPage>;
}
