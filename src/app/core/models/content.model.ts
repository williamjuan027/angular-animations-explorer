export interface Content {
    title: string,
    description: string,
    path: string,
    post: string;
    pageType: EPageType;
    demoComponent?: any;
    variants?: {
        title: string,
        post: string;
        pageType: EPageType;
        demoComponent?: any;
    }[]
}

export enum EPageType {
    ContentOnly,
    ContentWithDemo,
}  

export interface AdditionalResource {
    title: string,
    description: string,
    url: string
}

export interface ContentGroup {
    title: string,
    description: string,
    tagLine: string,
    content: Record<string, Content>,
}