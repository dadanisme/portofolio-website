import type { MDXComponents } from "mdx/types";
import remarkGfm from "remark-gfm";
import { H1, H2, H3 } from "@/components/mdx/heading";
import { MDXImage } from "@/components/mdx/mdx-image";

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
};

export const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  img: (props) => <MDXImage src={props.src || ""} alt={props.alt || ""} />,
  p: (props) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside text-muted-foreground space-y-2 mb-4 ml-4"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  code: (props) => (
    <code className="bg-muted px-1.5 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-muted border border-border p-4 overflow-x-auto mb-4 text-sm"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-border pl-4 italic text-muted-foreground my-4"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="border-b border-foreground" {...props} />
  ),
  tbody: (props) => <tbody {...props} />,
  tr: (props) => (
    <tr className="border-b border-border last:border-b-0" {...props} />
  ),
  th: (props) => (
    <th className="eyebrow text-foreground text-left px-3 py-2" {...props} />
  ),
  td: (props) => (
    <td
      className="px-3 py-3 align-top font-mono text-xs text-muted-foreground"
      {...props}
    />
  ),
};
