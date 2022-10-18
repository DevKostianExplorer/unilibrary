import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface BookElementProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    Book: Book
}

export type Book = {
    Title: string, 
    Author: string, 
    Rating: number, 
    Description: string, 
    Downloads: number, 
    TopRating: number, 
    Genre: string,
    Views: number,
    Src?: string
}