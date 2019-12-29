declare module '*.mdx' {
    const MDXComponent: (props: any) => JSX.Element; // eslint
    export default MDXComponent;
}
