declare const NODE_ENV, module, require: any;

type App ={
    subtitle: string;
    title: string;
    url: string;
    quote: string;
    author: string;
}

interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}
