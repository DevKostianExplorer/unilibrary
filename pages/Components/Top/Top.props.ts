import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface TopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
            arr: topBook[][]
}

export type topBook = {
    Title: string,
    Src: string
}