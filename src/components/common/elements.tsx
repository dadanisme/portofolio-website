import { RiExternalLinkLine } from "react-icons/ri";

export function B({ children }: React.PropsWithChildren<{}>) {
  return <strong className="font-bold">{children}</strong>;
}

export function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="hover:underline" {...props}>
      {props.children}
      <RiExternalLinkLine className="inline-block ml-1 relative bottom-[1.15px]" />
    </a>
  );
}
