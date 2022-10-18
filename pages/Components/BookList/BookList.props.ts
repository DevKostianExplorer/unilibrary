import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface BookListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}
export interface Books {
    BookList: Book[]
}
import { Book } from "../BookElement/BookElement.props";