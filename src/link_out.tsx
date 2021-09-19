export function LinkOut(attrs: {href: string, children: React.ReactNode}): JSX.Element {
  return (
    <a href={attrs.href} class="hover:underline text-blue-900" target="_blank" rel="noopener">
      {attrs.children}
    </a>
  );
}