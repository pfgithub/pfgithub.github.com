import { BasicPage } from "../src/basic_page";
import Link from "next/link";
import { LinkOut } from "../src/link_out";

export default function Home() {
  return (
    <BasicPage
      title="About"
      meta_desc="about me"
      parent={{ name: "pfg's homepage", href: "/" }}
      filename="/pages/about.tsx"
    >
      <h2 class="font-black text-3xl my-3">hi</h2>
      <p class="mb-3">
        I'm pfg. I have a{" "}
        <Link className="text-blue-700 hover:underline" href="/">
          homepage
        </Link>{" "}
        and a <LinkOut href="https://github.com/pfgithub">Github</LinkOut>.
      </p>
    </BasicPage>
  );
}
