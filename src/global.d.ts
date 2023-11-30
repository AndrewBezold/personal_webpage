declare module '*.txt' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';

declare module '*.css';

declare module '*.pdf';