import { RiExternalLinkLine } from "react-icons/ri";

export function B({ children }: React.PropsWithChildren<{}>) {
  return <strong className="font-bold text-gray-100">{children}</strong>;
}

export function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="hover:underline text-gray-200" {...props}>
      {props.children}
      <RiExternalLinkLine className="inline-block ml-1 relative bottom-[1.15px]" />
    </a>
  );
}
