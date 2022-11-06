import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    children?: ReactNode,
    title: string,
    icon?: 'star' | 'arrow' | 'none', 
    keys?: any,
    check: (input: string, key:any) => [boolean, string]  //function gets inputs value and return array with error and error message
}