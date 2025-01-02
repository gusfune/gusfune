import type { MDXComponents } from "mdx/types"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import Image, { ImageProps } from "next/image"

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const customComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  h2: ({ children }) => <h2 className="text-3xl font-bold py-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
  p: ({ children }) => <p className="">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gray-300 pl-4 italic text-lg">
      {children}
    </blockquote>
  ),
} as MDXComponents

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components || {}) }}
    />
  )
}
